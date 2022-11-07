// import { disableScroll } from '../functions/disable-scroll';
// import { enableScroll } from '../functions/enable-scroll';

(function () {
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const close = document?.querySelector('[data-burger-close]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');

    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      document.body.style.overflow = 'hidden' // disable scroll
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      document.body.style.overflow = 'visible' // enable scroll
    }
  });

  close?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger?.classList.remove('burger--active');
    menu?.classList.remove('menu--active');
    document.body.style.overflow = 'visible' // enable scroll
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      document.body.style.overflow = 'visible' // enable scroll
    });
  });
})();
