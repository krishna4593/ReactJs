import React from 'react'
import Card from './Components/Card.jsx'

const App = () => {

const[name,setName]=React.useState("")
const[imageUrl,setImageUrl]=React.useState("")
const[role,setRole]=React.useState("")
const[description,setDescription]=React.useState("")

const[allUsers,setAllUsers]=React.useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const oldUsers=[...allUsers]
    oldUsers.push({
      name:name,
      imageUrl:imageUrl,
      role:role,
      description:description
    })

    setAllUsers(oldUsers)
    
    
    setName("")
    setImageUrl("")
    setRole("")
    setDescription("")
  }
  const removeUser = (index) => {
    const filteredUsers = allUsers.filter((user, idx) => idx !== index);
    setAllUsers(filteredUsers);
  };

  return (
    <div className="h-screen bg-black text-white">

      <form
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      className="flex flex-wrap justify-center p-2" >


        <input 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className=" text-xl font-semibold border-2 px-5 py-2 rounded m-2 w-[45%]" type="text" placeholder='Enter your Name'/>

       <input 
       value={imageUrl}
       onChange={(e)=>setImageUrl(e.target.value)}
       className=" text-xl font-semibold border-2 px-5 py-2 rounded m-2 w-[45%]"type="text" placeholder='Enter Image URL'/>
        <input 
        value={role}
        onChange={(e)=>setRole(e.target.value)}
        className=" text-xl font-semibold border-2 px-5 py-2 rounded m-2 w-[45%]"type="text" placeholder='Enter your Role'/>
        <input 
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        className=" text-xl font-semibold border-2 px-5 py-2 rounded m-2 w-[45%]"type="text" placeholder='Enter your Description'/>
        <button className="bg-blue-500 px-5  active:scale-95 cursor-pointer py-2 rounded m-2 mt-4 w-[30%] hover:bg-blue-700" type="submit">Submit</button>
      </form>
     
      <div className="flex flex-wrap gap-0.5 m-2">
      {
        allUsers.map((user,idx)=>{
          return <Card elem={user} key={idx} index={idx} removeUser={removeUser}/>
        }
      )
      }
      </div>
    </div>
  )
}

export default App
