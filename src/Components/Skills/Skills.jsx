import React, { useLayoutEffect, useRef } from 'react'

import { gsap, CSSPlugin } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(CSSPlugin , ScrollTrigger);

function Skills() {

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

    <div id='skills' className='w-full container m-auto  bg-zinc-950 text-white'>
    <h1 className='text-center text-3xl font-bold' ref={titleRef}>Skills</h1>
    <div  className='w-full flex-wrap gap-3 container bg-zinc-950 mt-5 pb-10 text-white flex items-center justify-around'>
        <div className=' bg-zinc-900 p-4 rounded-md hover:bg-black'>
        <h1 className=' text-3xl font-semibold'>Front-End</h1>
        <ul className='flex  w-40 flex-wrap mt-2'>
          <li className='border border-orange-700 w-fit p-1 m-2 rounded-md bg-zinc-900'>HTML</li>
          <li className='border border-blue-700 w-fit p-1 m-2 rounded-md bg-zinc-900'>CSS</li>
          <li className='border border-amber-400 w-fit p-1 m-2 rounded-md bg-zinc-900'>JavaScript</li>
          <li className='border border-red-700 w-fit p-1 m-2 rounded-md bg-zinc-900'>React</li>
          <li className='border border-purple-700 w-fit p-1 m-2 rounded-md bg-zinc-900'>TailwindCSS</li>
        </ul>
        </div>

        <div className=' bg-zinc-900 p-4 rounded-md hover:bg-black'>
        <h1 className=' text-3xl font-semibold'>Back-End</h1>
        <ul className='flex  w-40 flex-wrap mt-2'>
          <li className='border border-purple-700 w-fit p-1 m-2 rounded-md bg-zinc-900'>NextJS</li>
          <li className='border border-yellow-700 w-fit p-1 m-2 rounded-md bg-zinc-900'>NodeJs</li>
          <li className='border border-red-800 w-fit p-1 m-2 rounded-md bg-zinc-900'>Express</li>
        </ul>
        </div>

        <div className=' bg-zinc-900 p-4 rounded-md hover:bg-black'>
        <h1 className=' text-3xl font-semibold'>Database</h1>
        <ul className='flex  w-40 flex-wrap mt-2'>
          <li className='border border-green-700 w-fit p-1 m-2 rounded-md bg-zinc-900'>MongoDB</li>
          <li className='border border-blue-700 w-fit p-1 m-2 rounded-md bg-zinc-900'>SQL</li>
          <li className='border border-yellow-700 w-fit p-1 m-2 rounded-md bg-zinc-900'>Firebase</li>
        </ul>
        </div>

        <div className=' bg-zinc-900 p-4 rounded-md hover:bg-black'>
        <h1 className=' text-3xl font-semibold'>Version-Control</h1>
        <ul className='flex  w-40 flex-wrap mt-2'>
          <li className='border border-orange-700 w-fit p-1 m-2 rounded-md bg-zinc-900'>Git</li>
          <li className='border border-blue-700 w-fit p-1 m-2 rounded-md bg-zinc-900'>Github</li>
        </ul>
        </div>
        
        
        
    </div>
    </div>
  )
}

export default Skills