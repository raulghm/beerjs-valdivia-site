import React from 'react'
import { useEffect } from 'react'

import styles from './index.module.css'
import data from '../../../data.json'

const title = data['meetup-active'] ? 'Ingresar al meetup' : 'Asistiré'
const url = data['meetup-active'] ? data['meetup-url'] : data['meetup-calendar']

function Attend() {
  useEffect(() => {
    const slide = {
      distance: '30px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'right',
      interval: 100,
      delay: 2000,
    }
    const ScrollReveal = require('scrollreveal').default
    ScrollReveal().reveal('.attend', { ...slide })
  }, [])

  return (
    <div className={`${styles.attend} attend hidden`}>
      <div>
        <div className={styles.attendHeading}>Jueves . {data.day}</div>
        <div className="text-sm">
          {data.edition} . {data.hour} <span className="hidden sm:inline">hrs</span>
        </div>
      </div>
      <div className="flex flex-row ml-4">
        <a target="_blank" rel="noreferrer" href={url}>
          <h4 className="flex items-center justify-center rounded-lg cursor-pointer bg-primary hover:bg-primary-light">
            <div className="p-2 text-lg md:text-xl title text-background">{title}</div>
          </h4>
        </a>
      </div>
    </div>
  )
}

export default Attend
