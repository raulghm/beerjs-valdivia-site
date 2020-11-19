import styles from './index.module.css'
import { Icon, Ribbon } from '../'
import { data } from '../../../package.json'

function Socialbar() {
  return (
    <div className={styles.socialbar}>
      <div>
        <Ribbon month={data.edition} />
      </div>

      <div className={styles.socialbarLine}></div>
      <a
        href="https://twitter.com/BeerJSValdivia"
        target="_blank"
        rel="noopener"
        aria-label="Twitter"
      >
        <Icon name="twitter" />
      </a>
      <a
        href="https://www.instagram.com/beerjsvaldivia"
        target="_blank"
        rel="noopener"
        aria-label="Instagram"
      >
        <Icon name="instagram" />
      </a>
      <a
        href="https://github.com/beerjs/valdivia"
        target="_blank"
        rel="noopener"
        aria-label="Spotify"
      >
        <Icon name="github" />
      </a>
      <a
        href="https://devschile.cl/"
        target="_blank"
        rel="noopener"
        aria-label="Spotify"
      >
        <Icon name="slack" />
      </a>
    </div>
  )
}

export default Socialbar
