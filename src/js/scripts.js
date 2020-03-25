/* eslint-disable no-undef */
;(function () {
  // Set local elements
  const doc = document.documentElement

  // Remove no-js class
  doc.classList.remove('no-js')
  doc.classList.add('js')

  const random = Math.floor(Math.random() * (8 - 0 + 1) + 0);
  document.querySelector('.Hero-images').style.backgroundImage = `url(/dist/images/bgs/${random}.jpg)`;

  // Reveal animations
  setTimeout(function () {
    // eslint-disable-next-line no-undef
    const sr = (window.sr = ScrollReveal())
    const slide = {
      duration: 1000,
      distance: '30px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'top',
      interval: 100,
      delay: 200
    }

    sr.reveal('.Hero', slide)
    sr.reveal('.What', { ...slide, origin: 'bottom', delay: 800 })
  }, 200)
})()
