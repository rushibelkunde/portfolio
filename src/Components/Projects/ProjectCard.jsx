import React from 'react'

const ProjectCard = ({name, src, live, git, skills}) => {
  return (
    <div className=' flex flex-col w-72  bg-zinc-900 text-white rounded-3xl mb-4 border-zinc-700 border hover:scale-90 transition-all'>
      <div className='overflow-hidden w-full'>
      <img src={src} alt="" className="w-full hover:opacity-50 hover:scale-150 transition-all"/>
      </div>
        
        <div className='flex flex-col items-center overflow-hidden'>
            <h1 className=' font-semibold text-xl p-2'>{name}</h1>
            <div className='flex gap-2'>
            {skills?.map((skill)=> <span className=' bg-slate-500 p-1 rounded'>{skill}</span>)}

            </div>
            
            <div className='flex justify-around w-full pb-3 mt-4'> 
            <a href={live} target='_blank' className=' bg-zinc-800 rounded text-center w-16 py-1 font-semibold'>Live</a>
            <a href={git} className='bg-zinc-800 rounded text-center w-16 py-1 font-semibold'>Github</a>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard