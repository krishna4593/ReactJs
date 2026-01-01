import React, { useState } from 'react'
import Button from './Components/Button'
import Card from './Components/Card';

const App = () => {
 const [selectedColor, setSelectedColor] = useState("");
  const Colors = ["red", "green", "blue", "yellow", "purple", "pink", "orange"];

  function colorSet(color){
    console.log("colorSet called with color:", color);
    setSelectedColor(color);
  }
  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center text-white">
     <h1 className='text-4xl font-black mb-5'>Color Switcher</h1>
      <div className='flex gap-3 mb-5'>
        
     {Colors.map((color) => (
      <Button key={color} color={color} colorSet={colorSet}/>
     ))}
      </div>

      <Card bgColor={selectedColor}/>
     </div>
  )
}

export default App
