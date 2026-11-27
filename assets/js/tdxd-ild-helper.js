(() => {
  const root = document.getElementById('tdxd-ild-helper');
  if (!root) return;
  const event = root.querySelector('#ild-event');
  const resolution = root.querySelector('#ild-resolution');
  const resolutionLabel = root.querySelector('#ild-resolution-label');
  const result = root.querySelector('#ild-result');
  function update() {
    resolutionLabel.hidden = event.value !== 'drug1';
    const actions = {
      drug1: `Interrupt until grade 0. ${resolution.value === 'yes' ? 'Maintain the dose if resolved within 28 days.' : 'Reduce the dose by one level if resolution takes more than 28 days.'} Consider steroids.`,
      drug2: 'Permanently discontinue T-DXd and promptly start steroids.',
      rt1: 'The label gives no specific dose instruction; manage per radiation oncology and keep monitoring.',
      rt2: 'Consider interrupting T-DXd.',
      rt3: 'Permanently discontinue T-DXd.'
    };
    result.textContent = actions[event.value];
  }
  event.addEventListener('change', update);
  resolution.addEventListener('change', update);
  update();
})();
