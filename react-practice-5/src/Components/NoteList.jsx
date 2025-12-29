import React from 'react'
import NoteCard from './NoteCard'
const NoteList = (props) => {
  return (
    
       <div className="p-10 pt-5 lg:w-1/2 lg:border-l-2 border-white">
        <h1 className="text-6xl font-bold ">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-[86vh] overflow-y-auto">
          {props.notes.map((note,index)=>(
           <NoteCard key={index} note={note} index={index} deleteNote={props.deleteNote}/>
          ))
          }
        </div>
      </div>

    
  )
}

export default NoteList
