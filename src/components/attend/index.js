import styles from './index.module.css'
import { Icon, Ribbon } from '../'

function Attend() {
  return (
    <div className={styles.attend}>
      <div>
        <div className={styles.attendHeading}>Jueves . 29</div>
        <div className="text-sm">Octubre . 19:00 hrs</div>
      </div>
      <div className="flex flex-row ml-4">
        <a target="_blank" href="https://www.google.com/calendar/render?action=TEMPLATE&text=BeerJS+Valdivia&details=BeerJS+Valdivia+edici%C3%B3n+Octubre+2020&location=https%3A%2F%2Fmeet.jit.si%2Fbeerjsvaldivia&dates=20201029T220000Z%2F20201030T010000Z">
          <h4 className="flex items-center justify-center rounded-lg cursor-pointer bg-primary">
            <div className="p-2 text-xl title text-background">Asistiré</div>
          </h4>
        </a>
      </div>
    </div >
  )
}

export default Attend
