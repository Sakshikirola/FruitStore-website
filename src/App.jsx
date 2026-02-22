import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'

const App = () => {
  return (
    <main className='overflow-x-hidden'> 
      <Navbar/>
      <Hero/>
      <Menu/> 
    </main>
  )
}

export default App
