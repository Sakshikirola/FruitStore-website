import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Banner from './components/Banner'

const App = () => {
  return (
    <main className='overflow-x-hidden'> 
      <Navbar/>
      <Hero/>
      <Menu/> 
      <Banner/>
    </main>
  )
}

export default App
