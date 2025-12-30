import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

 const [userData, setUserData] = useState([]);
 const[index, setIndex] = useState(1);

  const getData = async() => {
  
      const response = await axios(`https://picsum.photos/v2/list?page=${index}&limit=10`)
      
  setUserData(response.data);
  }

  useEffect(()=>{
    getData();
  },[index]) 

  let  displayData =   'Loading...';
if(userData.length>0){
  displayData = userData.map((elem, idx)=>{
    return(
      <div>
       <a href={elem.url} target='_blank'>
         <div key={idx}
      className='rounded-xl overflow-hidden h-52 w-52'
      >
        
        <img src={elem.download_url} alt={elem.author} className='w-full h-full object-cover'/>

     </div>
     <h3 className='text-lg font-semibold'>{elem.author}</h3>
       </a>
      </div>
    )
  })
}
  

  return (
    <div className='h-screen overflow-auto bg-black p-3 text-white'>
<div className='flex flex-wrap gap-6 mt-4 justify-center items-center'>
        {displayData}
      </div>

      <div className='flex justify-center items-center p-4 gap-6'>
        <button onClick={() => setIndex(index - 1)} disabled={index === 1} className="bg-amber-400 text-black rounded font-semibold px-4 py-2 active:scale-95">Prev</button>
        <p>Page {index}</p>
        <button 
        onClick={() => setIndex(index + 1)}
        className="bg-amber-400 text-black rounded font-semibold px-4 py-2 active:scale-95">Next</button>
      </div>
    </div>
  )
}

export default App
