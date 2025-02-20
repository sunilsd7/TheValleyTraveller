import { useState } from 'react'



import './App.css'
import Hero from './components/Hero'
import PopularDestination from './components/PopularDestination'
import Navbar from './components/Navbar'
import Herobase from './components/Herobase';




function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Herobase/>
     
      <PopularDestination/>
      
  
    </>
  )
}

export default App
