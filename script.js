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
      <a class="btn btn_ghost" href="#" data-book-service>${t.nav.book}</a>
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
      ${navOrder.map(p=>`<a href="${link(p)}">${t.nav[p]} <em>↗</em></a>`).join('')}
      <a href="#" data-book-service>${t.nav.book} <em>↗</em></a>
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

  /* motion (npm: motion) loaded via ESM CDN — Emil Kowalski style entrances */
  import('https://esm.sh/motion@11.18.2').then(({ animate, inView })=>{
    const tiles = document.querySelectorAll('.reveal_tile');
    tiles.forEach((el)=>{
      el.style.opacity = '0';
      el.style.filter = 'blur(14px)';
      el.style.transform = 'translateY(28px)';
      const stagger = Number(el.dataset.stagger || 0) * 0.12;
      inView(el, ()=>{
        animate(
          el,
          { opacity:[0,1], filter:['blur(14px)','blur(0px)'], y:[28,0] },
          { duration:1.1, delay:stagger, type:'spring', stiffness:220, damping:30, mass:0.9 }
        );
        const img = el.querySelector('img');
        if(img){
          img.style.transform = 'scale(1.08)';
          animate(img, { scale:[1.08,1] }, { duration:1.6, delay:stagger, ease:[0.22,1,0.36,1] });
        }
      },{ margin:'0px 0px -12% 0px', amount:.15 });
    });

    document.querySelectorAll('.reveal').forEach((el)=>{
      el.classList.remove('reveal');
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.filter = 'blur(8px)';
      inView(el, ()=>{
        animate(
          el,
          { opacity:[0,1], y:[28,0], filter:['blur(8px)','blur(0px)'] },
          { duration:.9, type:'spring', stiffness:200, damping:28 }
        );
      },{ margin:'0px 0px -10% 0px', amount:.1 });
    });
  }).catch(()=>{
    document.querySelectorAll('.reveal_tile,.reveal').forEach(el=>el.classList.add('is_in'));
  });

  /* ── hero reveal slider ──────────────────────── */
  document.querySelectorAll('.hero_reveal').forEach(setupHeroReveal);
  function setupHeroReveal(el){
    const start = parseFloat(el.dataset.reveal || '50');
    const set = (p)=>{
      const v = Math.max(0, Math.min(100, p));
      el.style.setProperty('--reveal', v + '%');
    };
    set(start);
    let active = false;
    const fromEvent = (ev)=>{
      const r = el.getBoundingClientRect();
      const x = (ev.touches ? ev.touches[0].clientX : ev.clientX) - r.left;
      set((x / r.width) * 100);
    };
    const begin = (ev)=>{ active = true; el.classList.add('is_dragging'); try{ el.setPointerCapture(ev.pointerId); }catch(_){} fromEvent(ev); ev.preventDefault(); };
    el.addEventListener('pointerdown', begin);
    el.addEventListener('pointermove',(ev)=>{ if(active) fromEvent(ev); });
    window.addEventListener('pointerup',()=>{ active = false; el.classList.remove('is_dragging'); });
    el.addEventListener('pointercancel',()=>{ active = false; el.classList.remove('is_dragging'); });
  }

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

  /* ── service rows → open booking modal ───────── */
  document.querySelectorAll('.service[data-service]').forEach((row)=>{
    row.style.cursor = 'pointer';
    row.addEventListener('click',(e)=>{
      if(e.target.closest('a,button')) return;
      const slug = row.dataset.service || '';
      const ev = new CustomEvent('click', { bubbles: true });
      const trigger = document.createElement('a');
      trigger.setAttribute('data-book-service', slug);
      trigger.style.display = 'none';
      document.body.appendChild(trigger);
      trigger.dispatchEvent(ev);
      trigger.remove();
    });
  });

  /* Block default navigation for [data-book-service] triggers — the SDK
     attaches its own click handler in dist/booking.js to open the modal.
     This runs first so href="#" never scrolls to top, even if the SDK
     script is slow or fails to load. */
  document.addEventListener('click', (e) => {
    const t = e.target instanceof Element ? e.target.closest('[data-book-service]') : null;
    if (t) e.preventDefault();
  }, true);
})();
