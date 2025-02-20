import { useState } from 'react'



import './App.css'
import Hero from './components/Hero'
import PopularDestination from './components/PopularDestination'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Hero/>
      <PopularDestination/>
  
    </>
  )
}

export default App
