import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'

import "./App.css"
import About from './Components/About/About'





function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects/>
    <About/>
    </>
  )
}

export default App