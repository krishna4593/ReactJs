import React from 'react'

const Button = (props) => {
  return (
    <div >
      <button 
      onClick={()=>{props.colorSet(props.color)}}
      style={{backgroundColor: props.color}} className='px-3 py-2 rounded-xl uppercase w-25 '>{props.color}</button>
    </div>
  )
}

export default Button
