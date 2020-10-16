import styles from './index.module.css'
import { Icon } from '../'

function Card(props) {
  return (
    <div className="rounded-xl bg-secondary border-primary">
      <div className="h-56 bg-center bg-cover rounded-t-xl" style={{ backgroundImage: 'url(' + props.avatar + ')', filter: 'hue-rotate(-20deg) contrast(.9) saturate(.85) brightness(1.2)' }}></div>
      <div className="p-6">
        <div className="text-base text-primary">{props.name}</div>
        <div>
          {props.job}
        </div>
        <div className="flex gap-2 mt-1">
          {props.linkedin && (
            <a href={props.linkedin} target="_blank">
              <Icon name="linkedin" size={18} />
            </a>
          )}
          {props.twitter && (
            <a href={props.twitter} target="_blank">
              <Icon name="twitter" size={18} />
            </a>
          )}
          {props.github && (
            <a href={props.github} target="_blank">
              <Icon name="github" size={18} />
            </a>
          )}
          {props.web && (
            <a href={props.web} target="_blank">
              <Icon name="web" size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
