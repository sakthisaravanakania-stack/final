import React from 'react'
import Navbar from './components/Navbar';
import Skill from './components/Skill';
import About from './components/About';
import Courses from './components/Courses';
import Choose from './components/Choose';
import Studennt from './components/Studennt';
import Faq from './components/Faq';
import Contact from './components/Contact';
import './components/App.css';
import Final from './components/Final';



const App = () => {
  return (
    <>
      <Navbar />
      <Skill />
      <About />
      <Courses />
      <Choose />
      <Studennt />
      <Faq />
      <Contact />
      <Final />
    </>
   
  )
}


export default App
