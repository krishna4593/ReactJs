import React from 'react'

const NoteForm = (props) => {
  return (
    
      <form 
      onSubmit={(e)=>{
        props.submitHandler(e)
      }}
      className="p-10 pt-5 flex flex-col gap-6 lg:w-1/2 ">
        <h1 className="text-6xl font-bold">Add Notes</h1>


        <input 
        value={props.note.heading}
        onChange={(e)=>props.setNote({...props.note,heading:e.target.value})}
        className="border rounded py-2 px-3 text-2xl  "
        type="text" placeholder='Enter Notes Heading' />

        <textarea
        value={props.note.description}
        onChange={(e)=>props.setNote({...props.note,description:e.target.value})}
         className="border rounded py-2 px-3 text-2xl h-32 "
        type="text"
        placeholder='Enter Notes Description'
        />
        <button 
        className="border rounded py-2 px-3 text-2xl bg-white text-black font-semibold "
        >Add Note</button>
      </form>
     
  )
}

export default NoteForm
