document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('[data-menu]');const nav=document.querySelector('[data-nav]');
  if(btn&&nav){const mq=matchMedia('(min-width: 900px)');
    const sync=()=>{if(mq.matches){nav.hidden=false;btn.setAttribute('aria-expanded','false')}else if(btn.getAttribute('aria-expanded')!=='true'){nav.hidden=true}};
    sync();mq.addEventListener('change',sync);
    btn.addEventListener('click',()=>{const o=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!o));nav.hidden=o;});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(!mq.matches){nav.hidden=true;btn.setAttribute('aria-expanded','false')}}));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&btn.getAttribute('aria-expanded')==='true'){btn.click();btn.focus()}});}
  const els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
    els.forEach(el=>io.observe(el));
    const all=()=>{if(innerHeight+scrollY>=document.documentElement.scrollHeight-40){els.forEach(el=>el.classList.add('in'));removeEventListener('scroll',all)}};addEventListener('scroll',all,{passive:true});}else els.forEach(el=>el.classList.add('in'));
  document.querySelectorAll('[data-tabs]').forEach(t=>{const tabs=[...t.querySelectorAll('[role=tab]')];
    const pick=i=>tabs.forEach((b,j)=>{b.setAttribute('aria-selected',String(i===j));b.tabIndex=i===j?0:-1;const p=document.getElementById(b.getAttribute('aria-controls'));if(p)p.hidden=i!==j;});
    tabs.forEach((b,i)=>{b.addEventListener('click',()=>pick(i));b.addEventListener('keydown',e=>{const k=e.key;let n=null;if(k==='ArrowRight')n=(i+1)%tabs.length;if(k==='ArrowLeft')n=(i-1+tabs.length)%tabs.length;if(n!==null){e.preventDefault();pick(n);tabs[n].focus()}})});});
});
