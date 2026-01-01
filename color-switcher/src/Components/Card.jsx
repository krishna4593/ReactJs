import React from 'react'

const Card = (props) => {
  return (
    <div className='h-65 w-65  rounded-xl flex items-center justify-center' style={{backgroundColor: props.bgColor}}>
      <h1 className='text-3xl '>{props.bgColor}</h1>
    </div>
  )
}

export default Card
