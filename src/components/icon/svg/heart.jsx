import * as React from "react"

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill={props.color} d="M17.867 3.493L22 6.937v5.127l-10 8.333-10-8.334V6.937l4.133-3.444L12 7.404l5.867-3.911zM18 1l-6 4-6-4-6 5v7l12 10 12-10V6l-6-5z" />
    </svg>
  )
}

export default SvgComponent
