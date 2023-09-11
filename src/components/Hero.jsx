import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {AiFillGithub,AiOutlineLinkedin} from 'react-icons/ai'

//import {  ComputersCanvas} from './canvas'

const Hero = () => { 
  return (
    <section className='relative w-full h-screen mx-auto lg:flex lg:h-screen lg:items-center py-40'>
      
      <div className='mx-auto max-w-screen-xl px-4 py-40 text-center ' >
      
      <h1 className={`${styles.heroHeadText}`}>Domenic <span className="bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text" >Arias</span></h1>
      <p><span className=" font-semibold bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">Software </span> Engineer | <span className=" font-semibold bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">Frontend </span> Developer</p>
      <div className='flex-row  flex justify-center gap-3'>
      <AiFillGithub className='text-4xl  mt-10 hover:text-secondary cursor-pointer' onClick={()=> window.open('https://github.com/domenic21')} />
      <AiOutlineLinkedin className='text-4xl  mt-10 hover:text-secondary cursor-pointer' onClick={()=> window.open('https://www.linkedin.com/in/domenic-arias-731a24213/')} />
      </div>
      </div>
      {/*<ComputersCanvas className='hidden'/>*/}

     {/*mobile scroll*/ }
      <div className='absolute xs:bottom-10 w-full  bottom-32 flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify items-start p-2'> 
          <motion.dev className="w-3 h-3 rounded-full bg-secondary mb-1 "
          animate={{
            y:[0 , 24,0 ]
          }}
          transition={{
            duration:1.5,
            repeat:Infinity,
            repeatType:'loop'
          }}
          
          
          />
          
          </div>
        </a>


      </div>

    </section>
  )
}

export default Hero