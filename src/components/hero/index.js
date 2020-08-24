import styles from './index.module.css'

function Hero() {
  return (
    <div className="lg:py-10">
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
