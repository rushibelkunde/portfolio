
import React, { useLayoutEffect, useRef } from 'react'

import { gsap, CSSPlugin } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ProjectCard from './ProjectCard'

gsap.registerPlugin(CSSPlugin , ScrollTrigger);

function Projects() {

  const titleRef = useRef()

  useLayoutEffect(()=>{
    gsap.fromTo(titleRef.current, {
      x: -500,
      scale: 0,
      duration: 1,
      ease: "power2.inOut"
    },{
      scale: 1,
      x: 0, // Move the element 100 pixels to the right
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: titleRef.current,
        toggleActions: "restart none restart none",
  
    }});
  },[])

  return (

    <div id='projects' className='container m-auto  bg-zinc-950 mt-40'>
    <h1  className='text-white text-4xl text-center font-bold' ref={titleRef}>Projects</h1>

    <div  className='flex items-center justify-around flex-wrap gap-5 mt-10'>


    <ProjectCard name={"Google-Docs-Clone"} src={"docs.png"} live={"https://google-docs-clone-pied-iota.vercel.app/"}
       git={"https://github.com/rushibelkunde/google-docs-clone/"} skills={["React", "Express","Socket.io","MongoDB"]}/>
      

      <ProjectCard name={"Buy-Busy (E-commerce)"} src={"buy-busy.png"} live={"https://rushibelkunde.github.io/buy-busy/"}
       git={"https://github.com/rushibelkunde/buy-busy/"} skills={["React", "Redux","Firebase"]}/>

      <ProjectCard name={"Post"} src={"post.png"} live={"https://post-woad.vercel.app/"}
       git={"https://github.com/rushibelkunde/Post/"} skills={["NextJs", "NextAuth","MongoDB"]} />

      <ProjectCard name={"Todo-App"} src={"todo-app.png"} live={"https://todo-app-rt5p.vercel.app/"} 
      git={"https://github.com/rushibelkunde/todo-app/"} skills={["React", "Express", "Postgres","JWT"]} />

      <ProjectCard name={"App-advertisement"} src={"ads.png"} live={"https://rushibelkunde.github.io/App-Advertise-UI/"} 
      git={"https://github.com/rushibelkunde/App-Advertise-UI/"} skills={["React", "GSAP-Animation"]} />

      <ProjectCard name={"Photo-Folio"} src={"photo.png"} live={"https://rushibelkunde.github.io/photo-folio/"} 
      git={"https://github.com/rushibelkunde/photo-folio/"} skills={["React", "Firebase Storage"]} />


        
    </div>

    <h1 className='text-white text-xl text-center font-semibold mt-20'>More Projects</h1>
    <div className='flex flex-col text-white justify-center items-center mt-3 font-semibold m-auto'>
      <div className='flex items-center justify-between px-2 h-10 w-80 border border-zinc-600 rounded bg-zinc-900 mt-2'>
        <h1>Expense-Tracker</h1>
        <div className='flex items-center gap-2 font-thin justify-between'>
          <a href="https://github.com/rushibelkunde/Expense-Tracker" className='hover:text-green-400'>Github</a>
          <a href="https://rushibelkunde.github.io/Expense-Tracker/" className='hover:text-red-400'>Live</a>
        </div>
      </div>
      <div className='flex items-center justify-between px-2 h-10 w-80 border border-zinc-600 rounded bg-zinc-900 mt-2'>
        <h1>Youtube-Clone</h1>
        <div className='flex items-center gap-2 font-thin justify-between'>
          <a href="https://github.com/rushibelkunde/Youtube-Clone-React" className='hover:text-green-400'>Github</a>
          <a href="https://rushibelkunde.github.io/Youtube-Clone-React/" className='hover:text-red-400'>Live</a>
        </div>
      </div>
      <div className='flex items-center justify-between px-2 h-10 w-80 border border-zinc-600 rounded bg-zinc-900 mt-2'>
        <h1>Find-Recipe</h1>
        <div className='flex items-center gap-2 font-thin justify-between'>
          <a href="https://github.com/rushibelkunde/find-recipe" className='hover:text-green-400'>Github</a>
          <a href="https://rushibelkunde.github.io/find-recipe/" className='hover:text-red-400'>Live</a>
        </div>
      </div>
      
    </div>
    
    </div>
    
  )
}

export default Projects