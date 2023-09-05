import React from 'react'
import {BallCanvas} from './canvas'
import SectionWrap from '../hoc/SectionWrap'
import { technologies } from '../constants'




const Tech = () => {
  return (
    <div className='flex  flex-wrap  gap-5'>
    {technologies.map((technology) =>(
      <div className="w-28 h-28 "key={technology.name}>
        <BallCanvas icon={technology.icon} />
      </div>
    ))}


    </div>
  )
}

export default SectionWrap (Tech, "")