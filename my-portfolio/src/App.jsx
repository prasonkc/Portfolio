import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Background from './components/Background'

function App() {

  return (
    <>
      <Background/>
      <Navbar/>
      <Hero/>
    </>
  )
}

export default App
