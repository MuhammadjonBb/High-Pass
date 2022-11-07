(() => {
  const btn = document.querySelectorAll('[data-close]')
  const searchBlock = document.querySelector('.search__items-wrap')

  btn[0].addEventListener('click', () => { // search close-btn
    searchBlock.classList.remove('search--active')
  })

  btn[1].addEventListener('click', () => { // map overlay close-btn
    document.querySelector('.map__overlay').classList.add('closed')
  })


})()
