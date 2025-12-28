import React from 'react'

const Card = ({ elem, index, removeUser }) => {
  return (
    <div>
      <div key={index} className="border-2 m-2 p-4 rounded w-62.5 text-center">
            <img className="w-20 h-20 mx-auto rounded-full" src={elem.imageUrl} alt={elem.name} />
            <h2 className="text-2xl font-bold mt-2">{elem.name}</h2>
            <p className="text-xl">{elem.role}</p>
            <p className="text-lg italic">{elem.description}</p>

            <button
            onClick={()=>removeUser(index)}
            className="bg-green-400 rounded-xl p-2 py-1 text-md font-bold text-black mt-2">Remove</button>
          </div>
        
    </div>
    )

      }
    
      
 
  


export default Card
