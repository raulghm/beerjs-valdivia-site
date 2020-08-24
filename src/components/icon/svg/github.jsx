import * as React from "react"

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 32 35" {...props}>
      <path
        d="M11.77 29.292C4.076 31.646 4.076 25.368 1 24.583M22.538 34v-6.074a5.388 5.388 0 00-.29-2.207 5.307 5.307 0 00-1.156-1.889C25.923 23.28 31 21.413 31 12.844a8.63 8.63 0 00-2.308-5.885 8.106 8.106 0 00-.138-5.917s-1.816-.55-6.016 2.323a20.193 20.193 0 00-10.769 0C7.57.493 5.754 1.042 5.754 1.042c-.79 1.88-.84 4-.139 5.917a8.631 8.631 0 00-2.307 5.932c0 8.507 5.077 10.374 9.907 10.986a5.306 5.306 0 00-1.145 1.868 5.387 5.387 0 00-.3 2.181V34"
        stroke={props.color}
        strokeWidth={3}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgComponent
