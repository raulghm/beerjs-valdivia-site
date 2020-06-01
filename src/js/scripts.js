/* eslint-disable no-undef */
; (function () {
  // Set local elements
  const doc = document.documentElement
  const btnMeetup = document.querySelector('.btn-meetup')

  // Remove no-js class
  doc.classList.remove('no-js')
  doc.classList.add('js')

  const random = Math.floor(Math.random() * (8 - 0 + 1) + 0)
  document.querySelector('.Hero-images').style.backgroundImage = `url(/dist/images/bgs/${random}.jpg)`

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

  btnMeetup.addEventListener('click', function () {
    Swal.fire({
      html: `
        <div class="p-4">
          <h2 class="mb-4">Estás a punto de ingresar a BeerJS Valdivia 🍺 edición mayo 2020.</h2>
          <p class="mb-4">Es un meetup normal y abierto en "jit.si" por lo que te solicitamos lo siguiente:</p>

          <ol class="text-sm p-2 list-decimal text-left ml-6 mb-4">
            <li>Mantener tu micrófono muteado.</li>
            <li>Ingresar tu nombre para identificarte (settings).</li>
            <li>Si quieres hablar o intervenir con algún comentario lo puedes hacer levantando la mano (icono).</li>
            <li>Si es necesario puedes usar el chat o video.</li>
            <li>Tener tu cerveza heladita a mano y disfrutar ;)</li>
          </ol>

          <div>Contraseña: <b>8347gr7843</b></div>
        </div>
      `,
      confirmButtonText: 'Ingresar 👉'
    }).then(() => {
      window.open('https://meet.jit.si/beerjsvaldivia', '_blank')
    })
  })
})()
