import React from 'react'
import { useEffect } from 'react'

import styles from './index.module.css'

function Hero() {
  useEffect(() => {
    const slide = {
      distance: '30px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'top',
      interval: 100,
      delay: 600,
    }
    const ScrollReveal = require('scrollreveal').default
    ScrollReveal().reveal('.hero', { ...slide })
  }, [])

  return (
    <div className="lg:py-10 hero">
      <div className={styles.hero}>
        {/* <div className={styles.heroImages}></div> */}
        <div className={styles.heroBody}>
          <div className={styles.heroTitle}>
            <h1>
              <span>Beer</span>
              <span>JS</span>
            </h1>
            <h2>Valdivia</h2>
            <h3>Encuentro de cerveza y código</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
