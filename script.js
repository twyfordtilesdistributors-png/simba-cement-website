const logoUrl='https://i.postimg.cc/CKSsrtbF/Screenshot-2026-09-01-142431.png';

// Use the supplied Simba Cement artwork consistently across every page.
document.querySelectorAll('.brand-mark').forEach(mark=>{
  mark.classList.add('actual-logo');
  mark.innerHTML=`<img class="site-logo" src="${logoUrl}" alt="Simba Cement — Strength Within">`;
});

// Use the supplied artwork as the browser tab icon as well.
const favicon=document.createElement('link');
favicon.rel='icon';
favicon.type='image/png';
favicon.href=logoUrl;
document.head.appendChild(favicon);

const logoStyles=document.createElement('style');
logoStyles.textContent=`
.brand-mark.actual-logo{padding-left:0!important;display:flex!important;align-items:center!important;width:245px!important;height:64px!important;line-height:1!important;overflow:hidden!important}
.brand-mark.actual-logo:before{display:none!important}
.brand-mark.actual-logo .site-logo{display:block;width:245px;height:64px;object-fit:cover;object-position:center center;background:#fff}
@media(max-width:700px){.brand-mark.actual-logo{width:190px!important;height:52px!important}.brand-mark.actual-logo .site-logo{width:190px;height:52px}}
`;
document.head.appendChild(logoStyles);

const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'Close menu':'Open menu');
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Open menu');
  }));
}

const year=document.querySelector('#year');
if(year)year.textContent=new Date().getFullYear();

function handleSubmit(event){
  event.preventDefault();
  const note=document.querySelector('#form-note');
  if(note)note.textContent='Thanks — the enquiry form is ready. Final email/CRM delivery will be connected before launch.';
  event.target.reset();
  return false;
}