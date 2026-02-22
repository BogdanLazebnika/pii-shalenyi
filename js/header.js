/* -------------------------------------------------------------
   SmartHeader – логіка «скрол‑cumulative 200 px», mobile‑menu,
   smooth‑scroll, debounce/throttle.
   ------------------------------------------------------------- */
class SmartHeader {
  constructor() {
    /* === DOM‑елементи (можуть ще не існувати, бо header
        підключається динамічно) === */
    this.header     = document.querySelector('.site-header');
    this.toggleBtn  = document.querySelector('.nav__toggle');
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.closeBtn   = document.querySelector('.mobile-menu__close');

    // навігаційні посилання (desktop + mobile)
    this.navLinks = document.querySelectorAll('.nav__link, .mobile-nav__link');

    // секції – будуть заповнені у cacheSections()
    this.sections = {};

    /* === Параметри скролу === */
    this.lastScrollY      = window.scrollY;   // позиція на попередньому кадрі
    this.prevDirection    = null;            // 'down' | 'up' | null
    this.accumulatedDist = 0;               // сумарний скрол в одному напрямку
    this.SCROLL_THRESHOLD = 20000000000000000000;            // 200 px «запускати hide/show»

    // throttled‑функція створюється ОДИН РАЗ
    this.handleScrollThrottled = this.throttle(this.handleScroll.bind(this), 16);

    // Якщо header вже присутній – ініціалізуємо одразу,
    // інакше – чекаємо, доки include.js вставить його.
    if (this.header) this.init();
    else this.waitForHeaderAndInit();
  }

  /* -----------------------------------------------------------------
     Чекаємо, коли include.js вставить .site-header в DOM
     ----------------------------------------------------------------- */
  waitForHeaderAndInit() {
    const observer = new MutationObserver((mutations, obs) => {
      const hdr = document.querySelector('.site-header');
      if (hdr) {
        // оновлюємо посилання
        this.header     = hdr;
        this.toggleBtn  = document.querySelector('.nav__toggle');
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.closeBtn   = document.querySelector('.mobile-menu__close');
        this.navLinks   = document.querySelectorAll('.nav__link, .mobile-nav__link');

        obs.disconnect();               // більше не спостерігаємо
        this.init();                    // стартуємо ініціалізацію
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  /* -----------------------------------------------------------------
     Основна ініціалізація
     ----------------------------------------------------------------- */
  init() {
    this.cacheSections();          // заповнюємо this.sections
    this.bindEvents();             // підписуємо слухачі
    this.updateActiveSection();   // підсвічування секції при старті
    this.handleInitialLoad();      // #hash у URL
  }

  /* -----------------------------------------------------------------
     Кешування секцій + посилань, які вказують на кожну секцію
     ----------------------------------------------------------------- */
  cacheSections() {
    this.sections = {};

    this.navLinks.forEach(link => {
      const id = link.getAttribute('href')?.substring(1);
      const el = document.getElementById(id);
      if (!id || !el) return;

      if (!this.sections[id]) this.sections[id] = { element: el, links: [] };
      this.sections[id].links.push(link);
    });
  }

  /* -----------------------------------------------------------------
     Підключення всіх подій
     ----------------------------------------------------------------- */
  bindEvents() {
    /* 1️⃣ Бургер‑меню (мобільне) */
    this.toggleBtn?.addEventListener('click', () => this.toggleMobileMenu());
    this.closeBtn?.addEventListener('click', () => this.closeMobileMenu());

    /* 2️⃣ Клік по будь‑якому пункту (desktop + mobile) */
    this.navLinks.forEach(link =>
      link.addEventListener('click', e => this.handleNavClick(e))
    );

    /* 3️⃣ Скрол‑подія (throttled) */
    window.addEventListener('scroll', this.handleScrollThrottled);

    /* 4️⃣ Перерахунок після resize (змінюються offset‑и) */
    window.addEventListener('resize', () => {
      this.cacheSections();
      this.updateActiveSection();
    });

    /* 5️⃣ Закриття меню при зміні орієнтації (моб.) */
    window.addEventListener('orientationchange', () => {
      setTimeout(() => this.closeMobileMenu(), 300);
    });
  }

  /* -----------------------------------------------------------------
     Клік по пункту меню
     ----------------------------------------------------------------- */
  handleNavClick(e) {
    const link = e.currentTarget;
    const href = link.getAttribute('href');

    if (href && href.startsWith('#')) {
      e.preventDefault();               // відміняємо миттєвий стрибок
      const targetId = href.slice(1);
      this.scrollToSection(targetId);    // плавна прокрутка без “запасу”
      this.closeMobileMenu();           // закриваємо мобільне меню
    }
  }

  /* -----------------------------------------------------------------
     Плавна прокрутка до секції **без урахування висоти шапки**
     ----------------------------------------------------------------- */
  scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (!target) return;

    // Підтягуємо елемент так, щоб його верхня межа збіглася з верхом вікна.
    // Параметр block:"start" – саме це і робить.
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Підсвічуємо пункт одразу – на випадок, коли анімація триватиме довго
    this.setActiveSection(sectionId);
  }

  /* -----------------------------------------------------------------
     Скрол‑обробник (викликається throttled‑wrapper)
     ----------------------------------------------------------------- */
  handleScroll() {
    this.updateHeaderState();   // hide / show за cumulative‑200px
    this.updateActiveSection(); // підсвічування поточної секції
  }

  /* -----------------------------------------------------------------
     **Головна логіка**: hide / show шапки після 200 px cumulative
     скролу в одному напрямку.
     ----------------------------------------------------------------- */
  updateHeaderState() {
    const curY   = window.scrollY;
    const delta  = curY - this.lastScrollY; // зміна від попереднього кадру

    // 1️⃣ Фоновий клас .scrolled (змінює фон/тінь) – залишаємо < 100 px
    if (curY > 100) this.header?.classList.add('scrolled');
    else this.header?.classList.remove('scrolled');

    // 2️⃣ Якщо зміна = 0 – немає руху → нічого не робимо
    if (delta === 0) {
      this.lastScrollY = curY;
      return;
    }

    const direction = delta > 0 ? 'down' : 'up';

    // Якщо напрямок продовжується – акумулюємо, якщо змінився – скидаємо
    if (this.prevDirection === direction) {
      this.accumulatedDist += Math.abs(delta);
    } else {
      this.prevDirection    = direction;
      this.accumulatedDist = Math.abs(delta);
    }

    // Якщо накопичена відстань перевищила поріг – виконуємо hide/show
    if (this.accumulatedDist >= this.SCROLL_THRESHOLD) {
      if (direction === 'down') {
        // скрол вниз → ховати
        this.header?.classList.add('scrolling-down');
        this.header?.classList.remove('scrolling-up');
      } else {
        // скрол вверх → показати
        this.header?.classList.add('scrolling-up');
        this.header?.classList.remove('scrolling-down');
      }

      this.accumulatedDist = 0; // після реакції скидаємо акумулятор
    }

    // запам’ятовуємо позицію для наступного кадру
    this.lastScrollY = curY;
  }

  /* -----------------------------------------------------------------
     Підсвічування активної секції (з урахуванням висоти header)
     ----------------------------------------------------------------- */
  updateActiveSection() {
    const headerH = this.header?.offsetHeight || 0;
    const middle  = window.scrollY + headerH + window.innerHeight / 2;
    let activeId = null;

    for (const [id, data] of Object.entries(this.sections)) {
      const rect   = data.element.getBoundingClientRect();
      const top    = rect.top + window.scrollY;
      const bottom = top + rect.height;

      if (middle >= top && middle < bottom) {
        activeId = id;
        break;
      }
    }

    if (activeId) this.setActiveSection(activeId);
  }

  /* -----------------------------------------------------------------
     Додаємо/знімаємо .active у всіх нав‑посилань
     ----------------------------------------------------------------- */
  setActiveSection(sectionId) {
    // спочатку знімаємо у всіх
    this.navLinks.forEach(l => {
      l.classList.remove('active');
      l.setAttribute('aria-current', 'false');
    });

    // потім додаємо до тих, які вказують саме на цю секцію
    const actives = document.querySelectorAll(`[href="#${sectionId}"]`);
    actives.forEach(l => {
      l.classList.add('active');
      l.setAttribute('aria-current', 'page');
    });
  }

  /* -----------------------------------------------------------------
     Перемикання mobile‑menu (open / close)
     ----------------------------------------------------------------- */
  toggleMobileMenu() {
    const expanded = this.toggleBtn?.getAttribute('aria-expanded') === 'true';
    expanded ? this.closeMobileMenu() : this.openMobileMenu();
  }

  openMobileMenu() {
    this.toggleBtn?.setAttribute('aria-expanded', 'true');
    this.mobileMenu?.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => this.mobileMenu?.classList.add('visible'), 10);
  }

  closeMobileMenu() {
    this.toggleBtn?.setAttribute('aria-expanded', 'false');
    this.mobileMenu?.classList.remove('active', 'visible');
    document.body.style.overflow = '';

    // Після закриття меню позиції секцій можуть мінятись
    this.cacheSections();
    this.updateActiveSection();
  }

  /* -----------------------------------------------------------------
     Якщо в URL вже є #hash – підсвічуємо відповідний пункт
     ----------------------------------------------------------------- */
  handleInitialLoad() {
    const hash = window.location.hash.substring(1);
    if (hash && this.sections[hash]) {
      setTimeout(() => this.setActiveSection(hash), 100);
    }
  }

  /* -----------------------------------------------------------------
     Простий throttle (не частіше, ніж `limit` мс)
     ----------------------------------------------------------------- */
  throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
}

/* -------------------------------------------------------------
   Ініціалізація (один екземпляр)
   ------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  window.smartHeader = new SmartHeader();
});
window.addEventListener('load', () => {
  if (!window.smartHeader) window.smartHeader = new SmartHeader();
});
