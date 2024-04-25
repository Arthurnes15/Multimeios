import * as React from "react"

export function SvgSent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="currentColor"
      className="bi bi-check-circle"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M8 15A7 7 0 118 1a7 7 0 010 14m0 1A8 8 0 108 0a8 8 0 000 16" />
      <path d="M10.97 4.97l-.02.022-3.473 4.425-2.093-2.094a.75.75 0 00-1.06 1.06L6.97 11.03a.75.75 0 001.079-.02l3.992-4.99a.75.75 0 00-1.071-1.05" />
    </svg>
  )
}