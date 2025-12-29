import React, { useState } from 'react'
import NoteForm from './Components/NoteForm'
import NoteList from './Components/NoteList'

const App = () => {
  const submitHandler=(e)=>{
    e.preventDefault();
   
    setNote({heading:"",description:""})

    const newNote={
      heading:note.heading,
      description:note.description
    }
    setNotes([...notes,newNote])
    
  }
  const [notes,setNotes]=useState([])
  const [note,setNote]=useState({heading:"",description:""})

  const deleteNote=(idx)=>{
    const filteredNotes=notes.filter((note,index)=>index!==idx)
    setNotes(filteredNotes)
  }
  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <NoteForm note={note} setNote={setNote} submitHandler={submitHandler}/>
      <NoteList notes={notes} deleteNote={deleteNote}/>
      
    </div>
  )
}

export default App
