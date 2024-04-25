import * as React from "react"

export function SvgArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={24}
      fill="currentColor"
      className="bi bi-arrow-right-circle-fill"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M8 0a8 8 0 110 16A8 8 0 018 0M4.5 7.5a.5.5 0 000 1h5.793l-2.147 2.146a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 10-.708.708L10.293 7.5z" />
    </svg>
  )
}
