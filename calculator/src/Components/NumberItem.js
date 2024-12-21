import React from 'react'

const NumberItem = ({setDisplay, num}) => {
  return (
    <div onClick={() => setDisplay(num)}>{num}</div>
  )
}

export default NumberItem