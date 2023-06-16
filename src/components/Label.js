import React from 'react'

function Label({color, text}) {
    let styles ={
        background: color,
    }

  return (
    <div className="label">
        <div className="circle" style={styles}></div>
        <h1>{text}</h1>
    </div>
  )
}

export default Label