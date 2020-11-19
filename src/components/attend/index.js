import styles from './index.module.css'
import { Icon, Ribbon } from '../'
import { data } from '../../../package.json'

const title = data['meetup-active'] ? 'Ingresar al meetup' : 'Asistiré'
const url = data['meetup-active'] ? data['meetup-url'] : data['meetup-calendar']

function Attend() {
  return (
    <div className={styles.attend}>
      <div>
        <div className={styles.attendHeading}>Jueves . {data.day}</div>
        <div className="text-sm">{data.edition} . {data.hour} hrs</div>
      </div>
      <div className="flex flex-row ml-4">
        <a target="_blank" href={url}>
          <h4 className="flex items-center justify-center rounded-lg cursor-pointer bg-primary">
            <div className="p-2 text-xl title text-background">{title}</div>
          </h4>
        </a>
      </div>
    </div >
  )
}

export default Attend
