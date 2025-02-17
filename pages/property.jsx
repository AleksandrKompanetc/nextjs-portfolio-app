import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import propertyImg from '../public/assets/project1.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative '>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={propertyImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Property Finder</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overbiev</h2>
          <p>This app was built using React JS and is hosted on Firebase. Users are able to search 
            properties based on an Address, Sity or ZIP code to retrieve a list of active properties 
            currently for sale. You will be able to view property information as well as the specific 
            location of the property integrated with the Google Maps API. User authentication is 
            available so you can signup & signin to your account with an email adress in order to save
            your favorite properties. This is made possible with Zillow API.
          </p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <button className='px-8 py-2 mt-4'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center '>
                <RiRadioButtonFill className='pr-1' />React
              </p>
              <p className='text-gray-600 py-2 flex items-center '>
                <RiRadioButtonFill className='pr-1' />Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center '>
                <RiRadioButtonFill className='pr-1' />Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center '>
                <RiRadioButtonFill className='pr-1' />Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center '>
                <RiRadioButtonFill className='pr-1' />Google API
              </p>
              <p className='text-gray-600 py-2 flex items-center '>
                <RiRadioButtonFill className='pr-1' />Zillow API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default property