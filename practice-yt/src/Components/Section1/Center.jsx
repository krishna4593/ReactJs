import React from 'react'
import LeftText from './LeftText'
import ImageContainer from './ImageContainer'

const Center = (props) => {
  return (
    <div className="pb-14 pt-5 h-[90vh] flex gap-10 items-center ">
      <LeftText/>
      <ImageContainer users={props.users}/>
    </div>
  )
}

export default Center
