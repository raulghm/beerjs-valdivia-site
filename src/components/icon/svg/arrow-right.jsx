import * as React from 'react'

function SvgComponent (props) {
  return (
    <svg viewBox="0 0 23 22" {...props}>
      <title>Path</title>
      <path
        d="M12.482 0L9.754 2.828l5.919 6.176H0v3.992h15.673l-5.92 6.176L12.484 22 23 11z"
        fill={props.color}
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgComponent
