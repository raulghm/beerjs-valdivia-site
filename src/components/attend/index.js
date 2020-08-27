import styles from './index.module.css'
import { Icon, Ribbon } from '../'

function Attend() {
  return (
    <div className={styles.attend}>
      <div>
        <div className={styles.attendHeading}>Jueves . 27</div>
        <div className="text-sm">Agosto . 19:00 hrs</div>
      </div>
      <div className="flex flex-row ml-4">
        <a target="_blank" href="https://meet.jit.si/beerjsvaldivia">
          <h4 className="flex items-center justify-center rounded-lg cursor-pointer bg-primary">
            <div className="p-2 text-xl title text-background">Ingresar al meetup</div>
          </h4>
        </a>
      </div>
    </div >
  )
}

export default Attend
