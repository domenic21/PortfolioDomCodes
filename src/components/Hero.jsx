import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
//import {  ComputersCanvas} from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto lg:flex lg:h-screen lg:items-center py-40'>
      <div className='mx-auto max-w-screen-xl px-4 py-40 text-center ' >
      
      <h1 className={`${styles.heroHeadText}`}>Domenic <span className='text-yellow-600'>Arias</span></h1>
      <p><span className='text-yellow-600'>Software </span> Engineer | <span className='text-yellow-600'>Frontend </span> Developer</p>
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