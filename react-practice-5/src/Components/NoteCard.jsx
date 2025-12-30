import React from 'react'

const NoteCard = (props) => {
  return (
    <div key={props.index}
         className="flex justify-between flex-col h-52 w-40 rounded-2xl p-5 bg-[url('https://imgs.search.brave.com/sKuBL99HeDVjryf0DzbovRwbTVg3ULh0RRvnyHwZmrA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY4NC9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw')] bg-cover text-black"
         >
              <div>
                <h4 className="text-2xl font-bold  leading-tight">{props.note.heading}</h4>
              <p className="text-md text-gray-500">{props.note.description}</p></div>

              <div className="flex gap-1"> <button 
              onClick={()=>props.editNote(props.index)}
              className='w-full bg-red-500 text-white active:scale-95 rounded font-bold'>Edit</button>
              <button 
              onClick={()=>props.deleteNote(props.index)}
              className='w-full bg-red-500 text-white active:scale-95 rounded font-bold'>Delete</button></div>
            </div>
  )
}

export default NoteCard
