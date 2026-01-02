import React, { useEffect, useEffectEvent, useState } from 'react'

const Timer = (props) => {
    const [timeLeft, setTimeLeft] = useState(25);

    const [displayTime, setDisplayTime] = useState("");

    useEffect(()=>{
     let intervalId= setInterval(() => {
        (setTimeLeft(prev=>{
            if(prev===0){
                clearInterval(intervalId)
                return 0
            }
            return prev-1
        }
        ))
     }, 1000);

     return ()=>clearInterval(intervalId)
    });
useEffect(()=>{
    if(timeLeft===0){
        props.setIsOver(true);  
    }
    let formattedTime = (Math.floor(timeLeft / 60)).toString().padStart(2, '0') + ':' + (timeLeft % 60).toString().padStart(2, '0');
    setDisplayTime(formattedTime);
},[timeLeft]);



  return (
    <div >
      <h1 className='text-white text-3xl font-medium'>Time Left :{displayTime} </h1>
    </div>
  )
}

export default Timer
