import React from 'react'

export default function IntroText({ id, children, message }) {
  return (
    <div id={id}>
      <h2>{message}</h2>  
      {children}
    </div>
  )
}
