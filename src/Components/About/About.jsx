import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'


const About = () => {
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
    <div className=' mt-60 container text-white m-auto mb-40 '>
        <h1 className='text-center text-4xl font-bold' ref={titleRef}>About</h1>

        <div className='flex items-center justify-center gap-10 mt-20'>
          <a href="https://instagram.com/rushibelkunde" target='_blank' className='hover:scale-125'>
          <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff"}} size='2xl'  />

          </a>
          <a href="https://github.com/rushibelkunde" target='_blank' className='hover:scale-125'>
          <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff"}} size='2xl'  />
          </a>
          <a href="https://twitter.com/rushibelkunde" target='_blank' className='hover:scale-125'>
          <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff"}} size='2xl'  />
          </a>
          <a href="tel:8421616957" target='_blank' className='hover:scale-125'>
          <FontAwesomeIcon icon={faPhone} size="xl" style={{color: "#ffffff",}} />
          </a>
          <a href='mailto:rushibelkunde18@gmail.com' target='_blank' className='hover:scale-125'>
          <FontAwesomeIcon icon={faEnvelope} size="xl" style={{color: "#ffffff",}} />
          </a>
        
        
        
        
        
                
        </div>
    </div>
  )
}

export default About