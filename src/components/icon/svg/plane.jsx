import * as React from 'react'

function SvgComponent (props) {
  return (
    <svg viewBox="0 0 31 31" {...props}>
      <title>iconmonstr-paper-plane-2</title>
      <path
        d="M0 15.5l14.208 4.004L23.25 9.042l-10.535 7.326-5.57-1.553 19.843-9.92-5.133 18.82-4.844-4.313-2.803 3.778v-.993l-2.583-.723V31l5.778-7.79 5.847 5.207L31 0z"
        fill={props.color}
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgComponent
