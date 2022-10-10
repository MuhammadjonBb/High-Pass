(function () {
  const page_width = document.documentElement.scrollWidth;
  const nav = document?.querySelector('.nav');
  const search = document?.querySelector('.search')

  const searchBtn = document?.querySelector('[data-search]');
  const searchItems = document?.querySelector('[data-searchItems]');

  searchBtn?.addEventListener('click', () => {
    searchItems?.classList.toggle('search--active');

    if (searchItems?.classList.contains('search--active')) {
      searchBtn?.setAttribute('aria-expanded', 'true');
      searchBtn?.setAttribute('aria-label', 'Закрыть поиск');
    } else {
      searchBtn?.setAttribute('aria-expanded', 'false');
      searchBtn?.setAttribute('aria-label', 'Открыть поиск');
    }

    if (page_width < 1125 && page_width > 801) {
      nav?.classList.toggle('hidden-nav')
      search?.classList.toggle('overflow-h')
    }
  });
})();
