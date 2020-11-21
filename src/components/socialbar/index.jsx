import React, { useEffect } from 'react'

import styles from './index.module.css'
import { Icon, Ribbon } from '../'
import data from '../../../data.json'

function Socialbar() {
  useEffect(() => {
    const slide = {
      distance: '30px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'top',
      interval: 100,
      delay: 1000,
    }
    const ScrollReveal = require('scrollreveal').default
    ScrollReveal().reveal('.socialbar', { ...slide })
  }, [])

  return (
    <div className={`${styles.socialbar} socialbar`}>
      <div>
        <Ribbon month={data.edition} />
      </div>

      <div className={styles.socialbarLine}></div>
      <a
        href="https://twitter.com/BeerJSValdivia"
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter">
        <Icon name="twitter" />
      </a>
      <a
        href="https://www.instagram.com/beerjsvaldivia"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram">
        <Icon name="instagram" />
      </a>
      <a
        href="https://github.com/beerjs/valdivia"
        target="_blank"
        rel="noreferrer"
        aria-label="Spotify">
        <Icon name="github" />
      </a>
      <a href="https://devschile.cl/" target="_blank" rel="noreferrer" aria-label="Spotify">
        <Icon name="slack" />
      </a>
    </div>
  )
}

export default Socialbar
