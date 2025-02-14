import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p>About</p>
          <h2>Who I Am</h2>
          <p>//I am not your normal developer</p>
          <p>I have spent the last 12 years in the fire service working as a proffesional firefighter & paramedic. 
            I have always had a knack for technology and working with computers. In 2019 I started working with 
            HTML & CSS to make some minor edits on a small business website that I was operating. What I thought 
            was just a few small edits turned into a love for programming.
          </p>
          <p>Fascinated with how intricate programming can be I was quickly drown to learn more. I started learning 
            javascript and was even more enthused with macking website interactive. I then started freelancing for 
            e-commerse companies on the Shopify platform. I am now spanding my time building projects with React JS, 
            Firebase and learning new technologies.
          </p>
          <p>Check out some of my latest projects.</p>
        </div>
        <div>
          <img src="/assets/proj4.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About