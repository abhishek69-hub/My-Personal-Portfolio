import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import react from "../assets/react.png"
import github from "../assets/github.png"
import javascript from "../assets/javascript.png"
import tailwind from "../assets/tailwind.png"
import python from "../assets/python.png"



export default function Skills() {
  return (
    <div name="skills" className='h-screen w-full bg-white'>
        <div className='max-w-[1100px] mx-auto p-10 flex flex-col justify-center  h-full md:w-10/12'>
            <div>
                <p className='text-2xl sm:text-4xl font-bold text-blue-900 text-left underline md:text-5xl'>Skills</p>
                <p className=' w-9/12 my-2 text-left '>These are the technologies I have worked with:</p>
            </div>
            
            <div className='grid-cols-2 sm:w-full grid grid-cols-2 md:grid-cols-3 gap-4 gap-y-8 text-center py-8 lg:grid-cols-4 gap-4 gap-y-8 text-center py-8'>
                <div className='shadow-md shadow-0460c16 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt="html icon" />
                    <p className='text-xs lg:text-sm'> HTML</p>
                </div>

                <div className='shadow-md shadow-0460c16 hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={css} alt="html icon" />
                    <p className='text-xs lg:text-sm'>CSS</p>
                </div>

                <div className='shadow-md shadow-0460c16 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt="html icon" />
                    <p className='text-xs lg:text-sm'>JavaScript</p>
                </div>

                <div className='shadow-md shadow-0460c16 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="html icon" />
                    <p className='text-xs lg:text-sm'>React JS</p>
                </div>

                <div className='shadow-md shadow-0460c16 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwind} alt="html icon" />
                    <p className='text-xs lg:text-sm'>Tailwind</p>
                </div>

                <div className='shadow-md shadow-0460c16 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={github} alt="html icon" />
                    <p className='text-xs lg:text-sm'>Github</p>
                </div>

                <div className='shadow-md shadow-0460c16 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={python} alt="html icon" />
                    <p className='text-xs lg:text-sm'>Python</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}
 


