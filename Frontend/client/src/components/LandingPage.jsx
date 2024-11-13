import React from 'react'
import MovingCard from './MovingCard'
import Sidebar from './Sidebar'

const LandingPage = () => {
  return (
    <>
      <div className='bg-black h-screen pt-24'>
        <div className='grid justify-center text-white'>
          <div>
              <h1 className='text-blue-600	 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mt-0'>Course.io</h1>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-4xl/none text-gray-100 mt-5'>Unlock Knowledge, One Course at a Time!</h2>
              <button className='bg-blue-700 text-white w-60 h-12 rounded-lg ml-10 mr-10 mt-5'>Explore Courses</button>
              <button className='bg-gray-100 text-black w-60 h-12 rounded-lg'>Get Started</button>
          </div>
        </div>
        <MovingCard />
    </div>
    </>
  )
}

export default LandingPage