import React from 'react'
import NoteCard from './NoteCard'
const NoteList = (props) => {

  const filteredNotes = props.notes.filter((note) =>
    note.heading.toLowerCase().includes(props.search.toLowerCase()) ||
    note.description.toLowerCase().includes(props.search.toLowerCase())
  );

  return (
    
       <div className="p-10 pt-5 lg:w-1/2 lg:border-l-2 border-white">

        <h1 className="text-6xl font-bold ">Recent Notes</h1>

        <input
        type="text"
        placeholder="Search notes..."
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
        className="w-full mb-4 mt-6 px-3 py-2 rounded text-white bg-gray-800 border border-gray-600"
      />

        <div className="flex flex-wrap gap-5 mt-5 lg:h-[75vh] overflow-y-auto">
         {filteredNotes.map((note, index) => (
           <NoteCard
            key={index} 
            note={note} 
            index={index} 
            deleteNote={props.deleteNote}
            editNote={props.editNote}
            />
          ))
          }
        </div>
      </div>

    
  )
}

export default NoteList
