import React, { useEffect, useState } from 'react'



function Home() {

  const [name, setName] = useState("I'm Rushikesh Belkunde");
  const [curIndex, setCurIndex] = useState(0)
  const [curName, setCurname] = useState('');

  
  
  

  useEffect(() => {
    const timer =setTimeout(()=>{
      setCurIndex((prev)=> prev+1)
      setCurname((prev) => name.substring(0, curIndex))
    },150)
    
    if(curName === name){
        // setCurIndex(0)
        // setCurname("")
        clearTimeout(timer)

    }

    return ()=>{
      clearTimeout(timer)
    }
    
  }, [curIndex]);
  return (
    <div className="w-full container m-auto h-screen flex text-white justify-center items-center bg-zinc-950">

      <div className="flex flex-col gap-2 sm:w-fit mx-2 m-auto w-80">

        <p className=' text-zinc-400'>Namastey </p>
        <h1 className='sm:text-4xl text-3xl font-bold '>{curName}</h1>
        <h3 className='title font-bold text-blue-100'>Full Stack Web Developer</h3>
        <p className=' w-96 '>Passionate and dedicated Full Stack Web Developer with a strong foundation in web technologies. Eager to Learn, contribute my
skills and creativity to a collaborative and growth-oriented environment.</p>

        <div className='flex gap-3'>

        <a href='mailto:rushibelkunde18@gmail.com'
        target='_blank' 
        className=" bg-black border border-zinc-600 hover:bg-zinc-700 hover:text-white rounded-xl p-2  font-semibold ">Contact Me</a>

        <a href='https://drive.google.com/file/d/10lAv2Jeqg9hMcykJHbildlIDH5Qx7XRz/view?usp=sharing' 
        target='_blank'
         className=" bg-black border  border-zinc-600 hover:bg-zinc-700 hover:text-white rounded-xl p-2 font-semibold">View CV</a>
        

        </div>
        

      </div>


    
    </div>
  )
}

export default Home