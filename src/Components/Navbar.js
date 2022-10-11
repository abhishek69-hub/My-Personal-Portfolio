import React from 'react'
import {FaBars,FaTimes,FaLinkedin,FaGitAlt,FaClipboardList,FaEnvelope} from 'react-icons/fa';

import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <div  className='fixed w-full h-[60px] flex justify-center px-4 bg-white opacity-100'>
      

      {/* Menu */}
      <div className=' hidden md:flex'>
        <ul className='hidden md:flex '>
          <li className='cursor-pointer hover:border-b-2 hover:border-blue-900 '><Link to="home" spy={true} smooth={true} duration={500} >
            Home
          </Link></li>
          <li className='cursor-pointer hover:border-b-2 hover:border-blue-900'><Link to="about" spy={true} smooth={true} duration={500} >
            About
          </Link></li>
          <li className='cursor-pointer hover:border-b-2 hover:border-blue-900'><Link to="skills" spy={true} smooth={true} duration={500} >
            Skills
          </Link></li>
          <li className='cursor-pointer hover:border-b-2 hover:border-blue-900'><Link to="projects" spy={true} smooth={true} duration={500} >
            Projects
          </Link></li>
          <li className='cursor-pointer hover:border-b-2 hover:border-blue-900'><Link to="contact" spy={true} smooth={true} duration={500} >
            Contact
          </Link></li>
        </ul>
      </div>

      <div className='fixed flex flex-col top-[35%] left-0'>
        <ul>
          <li className=' w-[130px] h-[40px] flex justify-between items-center hover:border hover:border-black ml-[-85px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full' href="/"> Linked In <FaLinkedin size={25}/> </a>
          </li>

          <li className=' w-[130px] h-[40px] flex justify-between items-center hover:border hover:border-black ml-[-85px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full' href="/"> Github <FaGitAlt size={25}/> </a>
          </li>

          <li className=' w-[130px] h-[40px] flex justify-between items-center hover:border hover:border-black ml-[-85px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full' href="/"> Mail  <FaEnvelope size={25}/> </a>
          </li>

          <li className=' w-[130px] h-[40px] flex justify-between items-center hover:border hover:border-black ml-[-85px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full' href="/"> Resume <FaClipboardList size={25}/> </a>
          </li>
        </ul>

      </div>


      {/* hamburger */}
      {/* <div className='md:hidden'>
        <FaBars/>
      </div> */}


      {/* Mobile Menu */}
      {/* <div className='hidden sm:flex'>
        <ul className='flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div> */}

      {/* social icons */}
      <div></div>





      
    </div>

  )
}
