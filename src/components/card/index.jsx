import React from 'react'
import { Icon } from '../'

function Card(props) {
  return (
    <div className="rounded-xl bg-secondary border-primary">
      <div
        className="bg-center bg-cover h-44 sm:h-56 rounded-t-xl"
        style={{
          backgroundImage: 'url(' + props.avatar + ')',
          filter: 'hue-rotate(-20deg) contrast(.9) saturate(.85) brightness(1.2)',
        }}></div>
      <div className="p-6 lg:py-6 lg:px-8 lg:pb-8">
        <div className="text-base text-primary">{props.name}</div>
        <div>
          {props.position} / {props.company}
        </div>
        <div className="flex mt-2">
          {props.linkedin && (
            <a
              href={`https://linkedin.com/in/${props.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="mr-3 opacity-75 hover:opacity-100"
              aria-label="Más info en Linkedin">
              <Icon name="linkedin" size={18} />
            </a>
          )}
          {props.twitter && (
            <a
              href={`https://twitter.com/${props.twitter}`}
              target="_blank"
              rel="noreferrer"
              className="mr-3 opacity-75 hover:opacity-100"
              aria-label="Más info en Twitter">
              <Icon name="twitter" size={18} />
            </a>
          )}
          {props.github && (
            <a
              href={`https://github.com/${props.github}`}
              target="_blank"
              rel="noreferrer"
              className="mr-3 opacity-75 hover:opacity-100"
              aria-label="Más info en Github">
              <Icon name="github" size={18} />
            </a>
          )}
          {props.instagram && (
            <a
              href={`https://instagram.com/${props.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="mr-3 opacity-75 hover:opacity-100"
              aria-label="Más info en Instagram">
              <Icon name="instagram" size={18} />
            </a>
          )}
          {props.web && (
            <a
              href={props.web}
              target="_blank"
              rel="noreferrer"
              className="mr-3 opacity-75 hover:opacity-100"
              aria-label="Más info en su Web">
              <Icon name="web" size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
