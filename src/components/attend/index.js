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
        <a target="_blank" href="https://www.google.com/calendar/render?action=TEMPLATE&text=BeerJS+Valdivia+-+Agosto&details=%C3%9Anete+desde+el+siguiente+enlace+a+BeerJS+Valdivia%3A+https%3A%2F%2Fmeet.jit.si%2Fbeerjsvaldivia%0A%0AEs+un+meetup+normal+y+abierto+v%C3%ADa+jit.si+por+lo+que+te+solicitamos+lo+siguiente%3A%0A%0A-+Mantener+tu+micr%C3%B3fono+silenciado.%0A-+Ingresar+tu+nombre+para+identificarte+%28settings%29.%0A-+Si+quieres+hablar+o+intervenir+con+alg%C3%BAn+comentario+lo+puedes+hacer+levantando+la+mano+%28icono%29.%0A-+Si+es+necesario+puedes+usar+el+chat+o+video.%0A-+Tener+tu+cerveza+heladita+a+mano+y+disfrutar+%3B%29&location=https%3A%2F%2Fmeet.jit.si%2Fbeerjsvaldivia&dates=20200827T230000Z%2F20200828T010000Z">
          <h4 className="flex items-center justify-center rounded-lg cursor-pointer bg-primary">
            <div className="p-2 text-xl title text-background">Asistiré</div>
          </h4>
        </a>
      </div>
    </div >
  )
}

export default Attend
