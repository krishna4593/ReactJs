import React, { useEffect, useState } from 'react'
import NoteForm from './Components/NoteForm'
import NoteList from './Components/NoteList'

const App = () => {

  const submitHandler=(e)=>{
    e.preventDefault();
   
    setNote({heading:"",description:""})

    if(editIndex===-1){
      const newNote={
      heading:note.heading,
      description:note.description
    }
    setNotes([...notes,newNote])
    
  }
  else{
    const updatedNotes=notes.map((n,index)=>{
      if(index===editIndex){
        return note
      }
      return n
    })
    setNotes(updatedNotes)
    setEditIndex(-1)
  }
  }

  const editNote=(idx)=>{
    setNote(notes[idx])
    setEditIndex(idx)
  }

  const deleteNote=(idx)=>{
    const filteredNotes=notes.filter((note,index)=>index!==idx)
    setNotes(filteredNotes)
  }

   

  const [notes,setNotes]=useState([])
  const [note,setNote]=useState({heading:"",description:""})
  const [editIndex,setEditIndex]=useState(-1)
  const [search, setSearch] = useState("");

useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  
  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <NoteForm note={note} setNote={setNote} submitHandler={submitHandler} editIndex={editIndex} />
      <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote}
        search={search}
      setSearch={setSearch} />
      
    </div>
  )
}

export default App
