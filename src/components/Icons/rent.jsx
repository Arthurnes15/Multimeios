import * as React from "react"

export function SvgRent(props) {
  return (
    <button type="button" onClick={props.onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          fill="currentColor"
          className="bi bi-bag-plus-fill text-warning"
          viewBox="0 0 16 16"
          {...props}
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.5a2.5 2.5 0 00-5 0V4h5zm1 0V4H15v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4h3.5v-.5a3.5 3.5 0 117 0M8.5 8a.5.5 0 00-1 0v1.5H6a.5.5 0 000 1h1.5V12a.5.5 0 001 0v-1.5H10a.5.5 0 000-1H8.5z"
          />
        </svg>
    </button>
  )
}