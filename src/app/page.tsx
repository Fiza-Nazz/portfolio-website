import React from 'react'
import Header from "@/components/Header";
import Home from "@/components/Home"
import About from "@/components/About";
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Services from "@/components/Services"
import Contact from "@/components/Contact"


const page = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default page
