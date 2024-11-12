import React from 'react'
import Navbar from './Navbar'

const LandingPage = () => {
  return (
    <>
    <div className='bg-black'>
      <Navbar />
      <div className='grid justify-center h-screen text-white'>
        <div>
            <h1 className='text-white text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-4'>Course.io</h1>
            <h2 className='text-white text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-4xl/none text-gray-400'>Unlock Knowledge, One Course at a Time!</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default LandingPage