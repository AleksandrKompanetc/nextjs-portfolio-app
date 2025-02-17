import Image from 'next/image'
import React from 'react'
import ProjectItem from './ProjectItem'
import propertyImg from '../public/assets/project1.jpg'
import cryptoImg from '../public/assets/project2.jpg'
import netflixImg from '../public/assets/project3.jpg'
import twitchImg from '../public/assets/project4.jpg'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] '>Projects</p>
        <h2 className='py-4'>What i've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem 
            title='Property Finder' 
            backgroundImg={propertyImg} 
            projectUrl='/property' 
          />
          <ProjectItem 
            title='Crypto App' 
            backgroundImg={cryptoImg} 
            projectUrl='/crypto' 
          />
          <ProjectItem 
            title='Property Finder'
            backgroundImg={netflixImg} 
            projectUrl='/netflix' 
          />
          <ProjectItem 
            title='Property Finder'
            backgroundImg={twitchImg} 
            projectUrl='/property' 
          />
        </div>
      </div>
    </div>
  )
}

export default Projects