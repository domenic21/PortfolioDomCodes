import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
//import {  ComputersCanvas} from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-80 top-[120px]
      `}>
      <div ></div>
      <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-yellow-600'>Domenic</span></h1>
      <p>Software Engineer</p>
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