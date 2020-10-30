import styles from './index.module.css'
import { Icon, Ribbon } from '../'

function Attend() {
  return (
    <div className={styles.attend}>
      <div className="">
        <div className="p-2 rounded-lg">
          <div className="text-primary">¡Gracias por participar de la edición de octubre! 🍺</div>
          <div>Pronto subiremos las presentaciones de cada charla.</div>
        </div>
      </div>
    </div >
  )
}

export default Attend
