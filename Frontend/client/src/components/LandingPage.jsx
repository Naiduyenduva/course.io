import React from 'react'
import Navbar from './Navbar'

const LandingPage = () => {
  return (
    <>
    <div className='bg-black h-full'>
      <Navbar />
        <div className='grid justify-center text-white'>
          <div>
              <h1 className='text-white text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-4'>Course.io</h1>
              <h2 className='text-white text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-4xl/none text-gray-400'>Unlock Knowledge, One Course at a Time!</h2>
          </div>
        </div>
        <div className='flex text-white justify-between'>
          <div className='h-72 w-96 border-2 border-white rounded-lg m-10 bg-gray-100'>class</div>
          <div className='h-72 w-96 border-2 border-white rounded-lg m-10 bg-gray-100'>class</div>
          <div className='h-72 w-96 border-2 border-white rounded-lg m-10 bg-gray-100'>class</div>

        </div>
        
    </div>
    </>
  )
}

export default LandingPage