(function(){
  const body = document.body;
  const lang = body.dataset.lang || 'en';
  const page = body.dataset.page || 'home';

  /* ── i18n dictionary ─────────────────────────── */
  const T = {
    en:{
      nav:{work:'Transformations',services:'Services',about:'Delyana',studio:'Studio',voices:'Reviews',contact:'Contact',book:'Book'},
      brand:{l1:'Urban',l2:'by Delyana'},
      footer:{visit:'Visit',hours:'Hours',contact:'Contact',social:'Follow',hoursv:'Tue to Sat · 10:00 to 19:00<br/>Sun &amp; Mon · By appointment',crafted:'Crafted with care · Varna'},
      menu:'Menu',close:'Close'
    },
    bg:{
      nav:{work:'Трансформации',services:'Услуги',about:'Деляна',studio:'Студио',voices:'Мнения',contact:'Контакт',book:'Резервация'},
      brand:{l1:'Urban',l2:'от Деляна'},
      footer:{visit:'Локация',hours:'Часове',contact:'Контакт',social:'Последвай',hoursv:'Вторник до Събота · 10:00 до 19:00<br/>Неделя и Понеделник · По уговорка',crafted:'Създадено с грижа · Варна'},
      menu:'Меню',close:'Затвори'
    }
  };
  const t = T[lang];

  /* ── route table ─────────────────────────────── */
  const pages = ['home','work','services','about','studio','voices','book','contact'];
  const file = (p)=> p==='home' ? 'index.html' : `${p}.html`;
  const link = (p)=> `../${lang}/${file(p)}`;
  const navOrder = ['work','services','about','studio','voices','contact'];

  /* ── header ──────────────────────────────────── */
  const header = document.createElement('header');
  header.className = 'nav';
  header.innerHTML = `
    <a class="brand" href="${link('home')}" aria-label="Urban by Delyana">
      <span class="brand_mark">U</span>
      <span class="brand_word">
        <span>${t.brand.l1}</span>
        <em>${t.brand.l2}</em>
      </span>
    </a>
    <nav class="nav_links" aria-label="Primary">
      ${navOrder.map(p=>`<a href="${link(p)}" class="${p===page?'is_active':''}">${t.nav[p]}</a>`).join('')}
    </nav>
    <div class="nav_right">
      <div class="lang" role="group" aria-label="Language">
        <a class="lang_btn ${lang==='en'?'is_active':''}" href="../en/${file(page)}">EN</a>
        <span class="lang_sep">/</span>
        <a class="lang_btn ${lang==='bg'?'is_active':''}" href="../bg/${file(page)}">BG</a>
      </div>
      <a class="btn btn_ghost" href="${link('book')}">${t.nav.book}</a>
      <button class="menu_toggle" aria-label="${t.menu}">
        <svg viewBox="0 0 24 24" width="18" height="18"><path d="M3 7h18M3 17h18" stroke="currentColor" stroke-width="1.4" fill="none"/></svg>
      </button>
    </div>`;
  document.body.prepend(header);

  /* ── mobile sheet ────────────────────────────── */
  const sheet = document.createElement('aside');
  sheet.className = 'sheet';
  sheet.innerHTML = `
    <div class="sheet_head">
      <span class="brand_word"><span>${t.brand.l1}</span><em>${t.brand.l2}</em></span>
      <button class="sheet_close" aria-label="${t.close}">
        <svg viewBox="0 0 24 24" width="22" height="22"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.4" fill="none"/></svg>
      </button>
    </div>
    <div class="sheet_links">
      ${navOrder.concat(['book']).map(p=>`<a href="${link(p)}">${t.nav[p]} <em>↗</em></a>`).join('')}
    </div>
    <div class="sheet_foot">
      <div class="lang">
        <a class="lang_btn ${lang==='en'?'is_active':''}" href="../en/${file(page)}">EN</a>
        <span class="lang_sep">/</span>
        <a class="lang_btn ${lang==='bg'?'is_active':''}" href="../bg/${file(page)}">BG</a>
      </div>
      <span class="cap cap_dim">Varna · BG</span>
    </div>`;
  document.body.appendChild(sheet);
  document.addEventListener('click',(e)=>{
    if(e.target.closest('.menu_toggle')) sheet.classList.add('is_open');
    if(e.target.closest('.sheet_close')) sheet.classList.remove('is_open');
  });

  /* ── footer ──────────────────────────────────── */
  const foot = document.createElement('footer');
  foot.className = 'foot';
  foot.innerHTML = `
    <div class="foot_lock">
      <div class="foot_brand">
        <div class="brand_mark brand_mark_lg">U</div>
        <p class="foot_title">${t.brand.l1} <em>${t.brand.l2}</em></p>
      </div>
      <div class="foot_cols">
        <div>
          <span class="cap">${t.footer.visit}</span>
          <p>ул. Цар Симеон I 12<br/>Varna, Bulgaria</p>
        </div>
        <div>
          <span class="cap">${t.footer.hours}</span>
          <p>${t.footer.hoursv}</p>
        </div>
        <div>
          <span class="cap">${t.footer.contact}</span>
          <p>hello@urbanbydelyana.com<br/>+359 88 000 000</p>
        </div>
        <div>
          <span class="cap">${t.footer.social}</span>
          <p><a href="#" class="link_under">Instagram</a><br/><a href="#" class="link_under">Pinterest</a></p>
        </div>
      </div>
      <div class="foot_base">
        <span>© 2026 Urban by Delyana</span>
        <span>${t.footer.crafted}</span>
      </div>
    </div>`;
  document.body.appendChild(foot);

  /* ── nav scroll state ────────────────────────── */
  const onScroll = ()=>{
    header.classList.toggle('is_scrolled', window.scrollY > 24);
  };
  document.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* ── reveal observer ─────────────────────────── */
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('is_in');
        io.unobserve(e.target);
      }
    });
  },{threshold:.12, rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  /* ── before+after sliders ────────────────────── */
  document.querySelectorAll('[data-ba]').forEach(setupBA);
  function setupBA(el){
    const clip = el.querySelector('.ba_clip');
    const handle = el.querySelector('.ba_handle');
    const input = el.querySelector('.ba_input');
    const clipImg = clip.querySelector('.ba_img');
    let active = false;

    const set = (p)=>{
      const v = Math.max(0, Math.min(100, p));
      clip.style.width = v + '%';
      handle.style.left = v + '%';
      if(clipImg) clipImg.style.width = (100 * (100 / Math.max(v,.01))) + '%';
      if(input) input.value = v;
    };

    const fromEvent = (ev)=>{
      const r = el.getBoundingClientRect();
      const x = (ev.touches ? ev.touches[0].clientX : ev.clientX) - r.left;
      set((x / r.width) * 100);
    };

    el.addEventListener('pointerdown',(ev)=>{ active = true; el.setPointerCapture(ev.pointerId); fromEvent(ev); });
    el.addEventListener('pointermove',(ev)=>{ if(active) fromEvent(ev); });
    el.addEventListener('pointerup',(ev)=>{ active = false; });
    el.addEventListener('pointercancel',()=>{ active = false; });
    if(input) input.addEventListener('input', ()=> set(parseFloat(input.value)));

    set(50);

    const open = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          let v = 50;
          const start = performance.now();
          const dur = 1400;
          const tick = (now)=>{
            const k = Math.min(1,(now-start)/dur);
            const eased = 1 - Math.pow(1-k, 3);
            const goTo = 50 + Math.sin(eased * Math.PI) * 22;
            set(goTo);
            if(k < 1) requestAnimationFrame(tick); else set(50);
          };
          requestAnimationFrame(tick);
          open.unobserve(el);
        }
      });
    },{threshold:.45});
    open.observe(el);
  }

  /* ── Clicka SDK mount ────────────────────────── */
  const mount = document.getElementById('clicka_booking');
  if(mount){
    window.URBAN_LOCALE = lang;
    window.URBAN_SALON_SLUG = 'urban-by-delyana';
    window.URBAN_ENGINE_URL = mount.dataset.engine || 'https://engine.clicka.app';
    mountClickaWidget(mount, lang);
  }

  function mountClickaWidget(node, locale){
    if(window.ClickaBooking && typeof window.ClickaBooking.mount === 'function'){
      window.ClickaBooking.mount(node, {
        salonSlug: window.URBAN_SALON_SLUG,
        engineUrl: window.URBAN_ENGINE_URL,
        locale
      });
      return;
    }
    // Awaiting SDK. Render a quiet, on brand placeholder.
    node.innerHTML = `
      <div class="clicka_pending">
        <span class="cap">${locale==='bg'?'Резервации':'Reservations'}</span>
        <p class="clicka_pending_t">${locale==='bg'?'Зареждане на резервационния модул':'Loading the booking module'}</p>
        <div class="clicka_pulse"></div>
        <p class="book_note">${locale==='bg'?'Един момент':'One moment'}</p>
      </div>`;
  }

  // Public API for the host app or SDK init script.
  window.UrbanBooking = {
    mount: (selector)=>{
      const n = typeof selector === 'string' ? document.querySelector(selector) : selector;
      if(n) mountClickaWidget(n, lang);
    },
    locale: lang
  };
})();
