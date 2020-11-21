import React from 'react'
import styles from './index.module.css'

function Ribbon({ month = 'Enero' }) {
  return (
    <div className={styles.ribbon}>
      <small>Edición</small>

      <div className={styles.ribbonWrapper}>
        <div className={styles.ribbonInner}>
          <div className={styles.ribbonContent}>{month}</div>
        </div>
      </div>
    </div>
  )
}

export default Ribbon
