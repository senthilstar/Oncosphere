(()=>{const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const els=document.querySelectorAll('.reveal');
if(rm||!('IntersectionObserver'in window)){els.forEach(e=>e.classList.add('in'))}else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});els.forEach(e=>io.observe(e))}
document.querySelectorAll('[data-count]').forEach(el=>{const t=+el.dataset.count;if(rm){el.textContent=t;return}
const go=()=>{const s=performance.now();const f=n=>{const p=Math.min((n-s)/1400,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)};
const o=new IntersectionObserver(es=>{if(es[0].isIntersecting){go();o.disconnect()}});o.observe(el)});
const bar=document.querySelector('.progress');if(bar&&document.querySelector('.post')){addEventListener('scroll',()=>{const h=document.documentElement;bar.style.transform=`scaleX(${h.scrollTop/(h.scrollHeight-h.clientHeight||1)})`},{passive:true})}})();
