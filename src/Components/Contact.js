import React from 'react'
import {BsFillPhoneFill,BsLinkedin,BsGithub} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {GrLinkedinOption} from 'react-icons/gr';

export default function Contact() {
  return (
    <div name="contact" className='h-screen w-full bg-white mt-7'>
      <div className='max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className="my-15">
          <p className='my-15 text-2xl pl-6 sm:text-4xl font-bold text-blue-900 text-left underline md:text-5xl'>Contact</p>
        </div>

        <div className="mt-10 flex flex-col mx-auto items-center justify-center   md:flex-row justify-around ">

          


            <div className="container flex flex-col  mx-auto group justify-center items-center  w-[185px] h-[90px] my-2 ">
              <BsFillPhoneFill color="rgb(30 58 138)" size={35} />
              <span className='mt-2 lg:opacity-0 group-hover:opacity-100 transition ease-in duration-200 text-xs '>+91 8114939956</span>
            </div>


            <div className="container flex flex-col mx-auto group justify-center items-center  w-[185px] h-[90px] my-2">
              <MdEmail color="rgb(30 58 138)" size={35} />
              <span className='mt-2 lg:opacity-0 group-hover:opacity-100 transition ease-in duration-200 text-xs'>abhishekpadhi69@gmail.com</span>
            </div>


            <a className='mx-auto' href="https://www.linkedin.com/in/abhishek-padhi-00b69418b/" target="_blank">
              <div className="container flex flex-col mx-auto group justify-center items-center  w-[185px] h-[90px] my-2">
                <GrLinkedinOption color="rgb(30 58 138)" size={35} />
                <span className='mt-2 lg:opacity-0 group-hover:opacity-100 transition ease-in duration-200 text-xs'>Open LinkedIn</span>
              </div>
            </a>



            <a className='mx-auto' href="https://github.com/abhishek69-hub" target="_blank">
              <div className="container flex flex-col mx-auto group justify-center items-center  w-[185px] h-[90px] my-2">
                <BsGithub color="rgb(30 58 138)" size={35} />
                <span className='mt-2 lg:opacity-0 group-hover:opacity-100 transition ease-in duration-200 text-xs'>Open Github</span>
              </div>
            </a>
          

        </div>



      </div>

    </div>
      
    
  )
}
// overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide relative