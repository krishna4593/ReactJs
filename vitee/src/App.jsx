import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Stats from './Components/Stats'
import Features from './Components/Features'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Features/>
      <Stats/>
    </div>
  )
}

export default App
