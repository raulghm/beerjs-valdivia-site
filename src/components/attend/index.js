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
        <a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NGZmdHQ1OGV2Z2U4MDBuZmdkcmdzcmx0N2ggcmF1bGdobUBt&tmsrc=raulghm%40gmail.com">
          <h4 className="flex items-center justify-center rounded-lg cursor-pointer bg-primary">
            <div className="p-2 text-xl title text-background">Asistiré</div>
          </h4>
        </a>
      </div>
    </div >
  )
}

export default Attend
