const slider = tns({
  container: '.Slides',
  mode: 'gallery',
  controls: false,
  nav: false,
  items: 1,
  autoplay: true
})

const arrow = document.querySelector('.Home-down')

arrow.addEventListener('click', () => {
  document.querySelector('.Home-section--next').scrollIntoView({
    behavior: 'smooth'
  })
})

const more = document.querySelector('.Button--more')

more.addEventListener('click', () => {
  document.querySelector('.Home-section--date').scrollIntoView({
    behavior: 'smooth'
  })
})
