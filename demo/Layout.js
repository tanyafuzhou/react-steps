import React from 'react'

export default function Layout ({ children }) {
  return (
    <div>
      <h1>react-steps</h1>
      <p>Data-driven React Steps Component </p>
      <a href="https://github.com/tanyafuzhou/react-steps">View project on GitHub</a>
      {children}
    </div>
  )
}
