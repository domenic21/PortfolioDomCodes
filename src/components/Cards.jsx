
import React from 'react'
import StackBanner from './StackBanner'



//make sure responsive modify the lg and xs for diffrent screen sizes
const Cards = () => {
  return ( 
    <>
  <div className="bg-bgPrimary py-20 sm:py-20 rounded-2xl mt-12 ">
  <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
    <div className="lg:grid lg:grid-cols-3 lg:gap-8 grid sm:grid-cols-1 max:grid-cols-3">
      <div>
        <h2 className="text-3xl font-extrabold text-gray-200">Education</h2>
       
      </div>
      <div className="mt-8 lg:mt-0 lg:col-span-2">
        <dl className="">
          <div>
            <dt className="text-lg leading-6  font-semibold text-gray-300">
            Bachelor of Science in Software Engineering ~ C# Track
            </dt>
            <dd className="mt-2 text-base text-red-400 grid grid-cols-2">
              <p >western Governors University</p>
              <p className='grid justify-end'> (June 2024) </p> 
              
            </dd>
          </div>
          
        </dl>
      </div>
    </div>
  
  </div>
</div>
<div className="bg-bgPrimary py-20 sm:py-20 rounded-2xl mt-8">
  <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
    <div className="lg:grid lg:grid-cols-3 lg:gap-8 grid sm:grid-cols-1 max:grid-cols-3">
      <div>
        <h2 className="text-3xl font-extrabold text-gray-200">Certifications</h2>
       
      </div>
      <div className="mt-8 lg:mt-0 lg:col-span-2">
        <dl className="">
          <div>
            <dt className="text-lg leading-6  font-semibold text-gray-300">
              Front-End Development with React
            </dt>
            <dd className="mt-3 text-base text-red-400 grid grid-cols-2">
              <p >CoderHouse</p>
              <p className='grid justify-end'> (Feb-2023) </p> 
              
            </dd>
          </div>
          <div className="mt-4 border-t border-gray-200 pt-8">
         
            
          </div>
        </dl>
       
      </div>

    </div>
  
  </div>
  <div className="flex justify-center mt-4">
  <StackBanner />
  </div>
</div>
 
 </>
  )
}

export default Cards