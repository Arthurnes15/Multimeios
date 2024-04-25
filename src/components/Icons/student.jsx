import * as React from "react"

export function SvgStudent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="currentColor"
      className="bi bi-person-check"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M12.5 16a3.5 3.5 0 100-7 3.5 3.5 0 000 7m1.679-4.493l-1.335 2.226a.75.75 0 01-1.174.144l-.774-.773a.5.5 0 01.708-.708l.547.548 1.17-1.951a.5.5 0 11.858.514M11 5a3 3 0 11-6 0 3 3 0 016 0M8 7a2 2 0 100-4 2 2 0 000 4" />
      <path d="M8.256 14a4.5 4.5 0 01-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
    </svg>
  )
}

