import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroTxt from './HeroTxt'
import Arrow from './Arrow'
const LeftText = () => {
  return (
    <div className="h-full w-1/3  flex flex-col justify-between">
    <HeroTxt/>
    <Arrow/>
    </div>
  )
}

export default LeftText
