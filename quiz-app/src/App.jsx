import React, { useState } from 'react'
import Timer from './Components/Timer'
import Question from './Components/Question'

const App = () => {
  const[isOver,setIsOver]=useState(false);  
const[score,setScore]=useState(0);
  return (
    <div className='bg-black h-screen flex flex-col gap-6 items-center justify-center'>
     
     {!isOver ? <>
      <Timer setIsOver={setIsOver} />
     <Question setScore={setScore} setIsOver={setIsOver} /> </> : <h1 className='text-white text-3xl'>Your Score is {score}</h1>}
    </div>
  )
}

export default App
