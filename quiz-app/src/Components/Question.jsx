import React from 'react'
import question from '../question.json'
import { useState } from 'react'

const Question = (props) => {
  const[index,setIndex]=React.useState(0);

  function handleOption(option){
    if(option===question[index].answer){
      props.setScore(prev=>prev+1);
    }
    if(index<question.length-1){
      setIndex(prev=>prev+1);
    }else{
      props.setIsOver(true);
    }
  }
  return (
    <div className='flex flex-col  justify-center'>
      <h1 className='text-white text-3xl mb-5'>{question[index].question}</h1>

      <div className='flex flex-col gap-6'> {question[index].options.map((option)=>(
     <button 
     onClick={()=>{handleOption(option)}}
     className='w-fitcontent p-4 bg-gray-700 text-white rounded-xl text-xl active:scale-95 transition-all '>{option}</button>
       )
    
   )}</div>
    </div>

  

  )
  }

  


export default Question
