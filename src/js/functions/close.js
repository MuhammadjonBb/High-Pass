(() => {
  const btn = document.querySelectorAll('[data-close]')
  const searchBlock = document.querySelector('.search__items-wrap')
  console.log(btn)
  console.log(searchBlock)
  btn[0].addEventListener('click', () => {
    searchBlock.classList.remove('search--active')
  })

  btn[1].addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('menu--active')
    document.body.classList.remove('dis-scroll')
  })


  btn[2].addEventListener('click', () => {
    document.querySelector('.map__overlay').classList.add('closed')
  })


})()
