import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-purple-600 text-center text-white font-bold py-4'>

         @E-Store.com
         <div className='mt-4 flex items-center justify-center'>
            {/* Social Icons */}
            <a 
            href="https://www.linkedin.com/in/foqia-siddiqui-3357152b5/" target='blank'
            className='px-4 py-2 text-white transition duration-300'>

             <FaLinkedin size={18}/>
            </a>
            <a 
            href="https://www.facebook.com/profile.php?id=61562307717172" target='blank'
            className='px-4 py-2 text-white transition duration-300'>

             <FaFacebook size={18}/>
            </a>
            <a 
            href="https://www.instagram.com/foqia.sd78/" target='blank'
            className='px-4 py-2 text-white transition duration-300'>

             <FaInstagram size={18}/>
            </a>
            <a 
            href="https://github.com/Foqia-Sd" target='blank'
            className='px-4 py-2 text-white transition duration-300'>

             <FaGithub size={18}/>
            </a>
            
         </div>

    </div>
  )
}

export default Footer