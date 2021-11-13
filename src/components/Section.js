import React from 'react'

export default function Section(props) {
  return (
    <div>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}
