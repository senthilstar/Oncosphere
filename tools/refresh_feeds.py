#!/usr/bin/env python3
"""Refresh public research metadata using only the Python standard library."""
import json
from pathlib import Path
import time
import urllib.parse
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
EMAIL = 'esenthilkmc02@gmail.com'
EUTILS = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/'


def fetch(url, params):
    request = urllib.request.Request(url + '?' + urllib.parse.urlencode(params),
                                     headers={'User-Agent': f'oncosphere/1.0 ({EMAIL})', 'Accept': 'application/json'})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(request, timeout=60) as response:
                return json.load(response)
        except (OSError, ValueError):
            if attempt == 3:
                raise
            time.sleep(2 ** attempt)


def pubmed():
    common = {'db': 'pubmed', 'retmode': 'json', 'tool': 'oncosphere', 'email': EMAIL}
    found = fetch(EUTILS + 'esearch.fcgi', dict(common, term='cancer[tiab] AND oncology',
                  reldate=30, datetype='pdat', sort='pub_date', retmax=15))
    ids = found['esearchresult']['idlist']
    if not ids:
        return []
    time.sleep(0.4)  # Below the unauthenticated EUtils limit of three requests/second.
    records = fetch(EUTILS + 'esummary.fcgi', dict(common, id=','.join(ids)))['result']
    return [{'pmid': pmid, 'title': records[pmid].get('title', ''),
             'journal': records[pmid].get('fulljournalname', ''),
             'pubdate': records[pmid].get('pubdate', ''),
             'authors': [a['name'] for a in records[pmid].get('authors', []) if a.get('name')],
             'url': f'https://pubmed.ncbi.nlm.nih.gov/{pmid}/'} for pmid in ids]


def trials():
    data = fetch('https://clinicaltrials.gov/api/v2/studies',
                 {'pageSize': 10, 'sort': 'LastUpdatePostDate:desc', 'query.cond': 'cancer', 'format': 'json'})
    result = []
    for study in data['studies']:
        protocol = study['protocolSection']
        identity = protocol['identificationModule']
        status = protocol['statusModule']
        nct = identity['nctId']
        result.append({'nct': nct, 'title': identity.get('briefTitle', ''),
                       'status': status.get('overallStatus', ''),
                       'phase': ', '.join(protocol.get('designModule', {}).get('phases', [])) or 'Not applicable',
                       'updated': status.get('lastUpdatePostDateStruct', {}).get('date', ''),
                       'url': f'https://clinicaltrials.gov/study/{nct}'})
    return result


def write_if_changed(name, records):
    path = ROOT / '_data' / name
    content = json.dumps(records, ensure_ascii=False, indent=2) + '\n'
    if not path.exists() or path.read_text(encoding='utf-8') != content:
        path.parent.mkdir(parents=True, exist_ok=True)
        temporary = path.with_suffix('.tmp')
        temporary.write_text(content, encoding='utf-8')
        temporary.replace(path)
        print(f'Updated {name}: {len(records)} items')
    else:
        print(f'Unchanged {name}: {len(records)} items')


def main():
    # Fetch both before writing, so a failed provider does not leave a partial refresh.
    papers, studies = pubmed(), trials()
    write_if_changed('latest_pubmed.json', papers)
    write_if_changed('latest_trials.json', studies)


if __name__ == '__main__':
    main()
