const logoUrl='https://i.postimg.cc/CKSsrtbF/Screenshot-2026-09-01-142431.png';

// Use the supplied Simba Cement artwork consistently across every page.
document.querySelectorAll('.brand-mark').forEach(mark=>{
  mark.classList.add('actual-logo');
  mark.innerHTML=`<img class="site-logo" src="${logoUrl}" alt="Simba Cement — Strength Within">`;
});

const favicon=document.createElement('link');
favicon.rel='icon';favicon.type='image/png';favicon.href=logoUrl;document.head.appendChild(favicon);

const logoStyles=document.createElement('style');
logoStyles.textContent=`
.brand-mark.actual-logo{padding-left:0!important;display:flex!important;align-items:center!important;width:205px!important;height:56px!important;line-height:1!important;overflow:hidden!important}
.brand-mark.actual-logo:before{display:none!important}
.brand-mark.actual-logo .site-logo{display:block;width:205px;height:56px;object-fit:cover;object-position:center center;background:#fff}
@media(max-width:700px){.brand-mark.actual-logo{width:165px!important;height:48px!important}.brand-mark.actual-logo .site-logo{width:165px;height:48px}}
`;
document.head.appendChild(logoStyles);

// Products page: replace the temporary catalogue hero with the requested breadcrumb,
// headline, supporting copy and an animated construction/factory scene.
if(location.pathname.toLowerCase().endsWith('products.html')){
  const hero=document.querySelector('.product-catalogue-hero');
  if(hero){
    hero.className='products-intro-hero';
    hero.innerHTML=`
      <div class="products-intro-copy">
        <div class="products-breadcrumb"><a href="index.html">HOME</a><span>›</span><b>PRODUCTS</b></div>
        <div class="products-kicker">SIMBA CEMENT</div>
        <h1>OUR PRODUCTS</h1>
        <span class="products-redline"></span>
        <p>High-quality cement and construction materials engineered to help you build strong, durable structures with confidence.</p>
      </div>
      <div class="cement-motion" aria-label="Animated Simba Cement construction scene">
        <div class="sky-glow"></div>
        <div class="factory"><div class="factory-tower tower-one"></div><div class="factory-tower tower-two"></div><div class="factory-silo silo-one"></div><div class="factory-silo silo-two"></div><div class="factory-roof"></div><div class="factory-word">SIMBA CEMENT</div></div>
        <div class="bag-scene"><div class="big-bag bag-red"><img src="${logoUrl}" alt="Simba Cement branded bag"><span>50 KG</span></div><div class="big-bag bag-blue"><div class="bag-logo-blue">SIMBA<br><b>CEMENT</b></div><span>50 KG</span></div></div>
        <div class="mixer mixer-one"><div class="mixer-cab">SIMBA</div><div class="mixer-drum"></div><div class="wheel"></div><div class="wheel two"></div></div>
        <div class="lorry"><div class="lorry-cab"><b>SIMBA</b><small>CEMENT</small></div><div class="lorry-bed">SIMBA CEMENT</div><div class="wheel"></div><div class="wheel two"></div></div>
        <div class="road"><span></span></div>
        <div class="motion-dust dust-one"></div><div class="motion-dust dust-two"></div><div class="motion-dust dust-three"></div>
      </div>`;
    const style=document.createElement('style');
    style.textContent=`
.products-intro-hero{position:relative;min-height:610px;overflow:hidden;background:linear-gradient(180deg,#f8f8f7 0%,#fff 63%,#eceae5 63%,#dedbd4 100%);display:flex;align-items:flex-start}.products-intro-copy{position:relative;z-index:5;width:min(1390px,calc(100% - 80px));margin:0 auto;padding:62px 0 0}.products-breadcrumb{display:flex;gap:10px;align-items:center;font-size:11px;font-weight:800;letter-spacing:.7px;color:#777;text-transform:uppercase;margin-bottom:38px}.products-breadcrumb a{color:#222}.products-breadcrumb span{font-size:18px;color:#c9151e}.products-breadcrumb b{color:#c9151e}.products-kicker{font-size:11px;font-weight:900;letter-spacing:2.5px;color:#c9151e;margin-bottom:8px}.products-intro-copy h1{font-family:Oswald,Impact,sans-serif;font-size:clamp(58px,7vw,94px);line-height:.94;letter-spacing:.5px;margin:0;color:#111}.products-redline{display:block;width:58px;height:4px;background:#c9151e;margin:17px 0 17px}.products-intro-copy>p{max-width:590px;font-size:18px;line-height:1.55;color:#4e5256;margin:0}.cement-motion{position:absolute;left:0;right:0;bottom:0;height:390px;overflow:hidden}.sky-glow{position:absolute;left:50%;top:-120px;width:520px;height:300px;border-radius:50%;background:rgba(255,214,116,.35);filter:blur(25px)}.factory{position:absolute;right:6%;bottom:115px;width:560px;height:230px;opacity:.92}.factory-tower{position:absolute;bottom:0;width:30px;background:linear-gradient(#9da2a5,#676b6d);border:2px solid #555}.tower-one{height:210px;right:360px}.tower-two{height:165px;right:270px}.factory-tower:after{content:'';position:absolute;left:-15px;right:-15px;top:22px;height:3px;background:#686c6f;box-shadow:0 45px #686c6f,0 90px #686c6f,0 135px #686c6f}.factory-silo{position:absolute;bottom:0;width:94px;height:145px;border-radius:48px 48px 9px 9px;background:linear-gradient(90deg,#9b9d9e,#d0d0cd 48%,#85888a);border:2px solid #777}.silo-one{right:120px}.silo-two{right:15px;height:125px}.factory-roof{position:absolute;right:110px;bottom:140px;width:190px;height:18px;background:#c9151e;transform:skew(-28deg)}.factory-word{position:absolute;right:45px;bottom:30px;font-size:13px;font-weight:900;letter-spacing:1px;color:#777}.bag-scene{position:absolute;left:20%;bottom:105px;z-index:4;display:flex;align-items:flex-end;gap:22px}.big-bag{width:150px;height:205px;position:relative;background:#e7d6a9;box-shadow:8px 14px 18px rgba(0,0,0,.2);transform-origin:bottom center;animation:bagFloat 3.8s ease-in-out infinite}.big-bag img{width:100%;height:100%;object-fit:cover;mix-blend-mode:multiply}.big-bag span{position:absolute;bottom:10px;right:11px;font-size:12px;font-weight:900;color:#222}.bag-red{animation-delay:-1s;transform:rotate(-3deg)}.bag-blue{background:linear-gradient(90deg,#e8d8ad 0 15%,#dfe3eb 15% 85%,#e8d8ad 85%);transform:rotate(3deg);animation-delay:-2.2s}.bag-logo-blue{position:absolute;inset:32px 10px 28px;text-align:center;color:#17468f;font-size:26px;font-weight:900;line-height:.82}.bag-logo-blue:before{content:'♛';display:block;font-size:42px;color:#17468f;margin-bottom:7px}.bag-logo-blue b{font-size:21px}.mixer{position:absolute;bottom:57px;z-index:6;width:210px;height:88px;animation:driveMixer 18s linear infinite}.mixer-one{left:-240px}.mixer-cab{position:absolute;left:0;bottom:24px;width:62px;height:47px;background:#c9151e;border-radius:8px 5px 2px 2px;color:#fff;font-size:9px;font-weight:900;padding:9px}.mixer-drum{position:absolute;left:55px;bottom:25px;width:120px;height:55px;border-radius:55% 45% 45% 55%;background:linear-gradient(135deg,#a8abad,#e3e4e1,#7b7f82);transform:rotate(-12deg);border:3px solid #6b6f72}.mixer-drum:after{content:'';position:absolute;left:18px;top:8px;width:70px;height:34px;border:3px dashed #777;border-radius:50%}.wheel{position:absolute;bottom:4px;left:10px;width:27px;height:27px;border-radius:50%;background:#202326;border:6px solid #aeb0ae}.wheel.two{left:154px}.lorry{position:absolute;bottom:55px;z-index:7;width:280px;height:90px;left:-320px;animation:driveLorry 14s linear infinite;animation-delay:6s}.lorry-cab{position:absolute;left:0;bottom:23px;width:70px;height:56px;background:#c9151e;color:#fff;padding:7px;font-size:12px;font-weight:900;border-radius:7px 4px 0 0}.lorry-cab small{display:block;font-size:7px}.lorry-bed{position:absolute;left:62px;bottom:23px;width:200px;height:58px;background:#173f87;color:#fff;font-size:17px;font-weight:900;display:flex;align-items:center;justify-content:center;letter-spacing:1px;border:3px solid #102f68}.lorry .wheel{left:16px}.lorry .wheel.two{left:220px}.road{position:absolute;left:0;right:0;bottom:0;height:58px;background:#55585a;border-top:7px solid #8d8c88}.road span{position:absolute;left:0;top:25px;width:100%;height:4px;background:repeating-linear-gradient(90deg,#e9e4d5 0 55px,transparent 55px 105px);animation:roadMove 2.2s linear infinite}.motion-dust{position:absolute;bottom:55px;width:18px;height:18px;background:rgba(150,145,136,.35);border-radius:50%;animation:dustMove 3s ease-out infinite}.dust-one{left:45%;animation-delay:-.7s}.dust-two{left:49%;animation-delay:-1.7s}.dust-three{left:53%;animation-delay:-2.3s}@keyframes bagFloat{0%,100%{translate:0 0}50%{translate:0 -8px}}@keyframes driveMixer{0%{left:-250px}45%{left:42%}55%{left:47%}100%{left:110%}}@keyframes driveLorry{0%{left:-330px}100%{left:110%}}@keyframes roadMove{to{background-position:-105px 0}}@keyframes dustMove{0%{transform:translate(0,0) scale(.5);opacity:0}30%{opacity:1}100%{transform:translate(-55px,-35px) scale(2);opacity:0}}@media(max-width:760px){.products-intro-hero{min-height:720px}.products-intro-copy{width:calc(100% - 32px);padding-top:35px}.products-breadcrumb{margin-bottom:25px}.products-intro-copy h1{font-size:54px}.products-intro-copy>p{font-size:15px;max-width:400px}.cement-motion{height:410px}.factory{right:-145px;bottom:120px;transform:scale(.75);transform-origin:right bottom}.bag-scene{left:7%;bottom:105px;gap:8px;transform:scale(.72);transform-origin:left bottom}.mixer{transform:scale(.72);transform-origin:left bottom}.lorry{transform:scale(.7);transform-origin:left bottom}.road{height:48px}}`;
    document.head.appendChild(style);
  }
}

const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu')}));}

const year=document.querySelector('#year');
if(year)year.textContent=new Date().getFullYear();

function handleSubmit(event){event.preventDefault();const note=document.querySelector('#form-note');if(note)note.textContent='Thanks — the enquiry form is ready. Final email/CRM delivery will be connected before launch.';event.target.reset();return false;}
