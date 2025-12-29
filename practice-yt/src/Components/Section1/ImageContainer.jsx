import React from 'react'
import RightCard from './RightCard'

const ImageContainer = (props) => {
  return (
    <div id="right" className='h-full w-2/3  p-6 flex flex-nowrap overflow-x-auto gap-4 rounded-4xl'>
     {
        props.users.map((user,idx)=>(
            <RightCard key={idx}
            id={idx}
            img={user.img}
            tag={user.tag}
            />
        ))

     }
    </div>
  )
}

export default ImageContainer
