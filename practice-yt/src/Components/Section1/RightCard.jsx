import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='w-70 h-full bg-black rounded-4xl shrink-0  overflow-hidden relative'> 
      <img 
      className="h-full w-full  object-cover"
      src={props.img} alt="" />
     <RightCardContent 
     tag={props.tag}
     id={props.id}
     />
     
    </div>
  )
}

export default RightCard
