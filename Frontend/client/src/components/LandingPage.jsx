import React from 'react'

const LandingPage = () => {
  return (
    <>
      <div className='bg-black h-full pt-24'>
        <div className='grid justify-center text-white'>
          <div>
              <h1 className='text-blue-600	 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mt-10'>Course.io</h1>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-4xl/none text-gray-100 mt-5'>Unlock Knowledge, One Course at a Time!</h2>
              <button className='bg-blue-700 text-white w-60 h-12 rounded-lg ml-10 mr-10 mt-5'>Explore Courses</button>
              <button className='bg-gray-100 text-black w-60 h-12 rounded-lg'>Get Started</button>
          </div>
        </div>
        <div className='flex text-black justify-between'>
          <img src='https://img.youtube.com/vi/Nv2DERaMx-4/sddefault.jpg' alt='hii' className='h-60 w-96 rounded-lg m-10 bg-gray-900' />
          <img src='https://img.youtube.com/vi/ZxKM3DCV2kE/sddefault.jpg' alt='hii' className='h-60 w-96 rounded-lg m-10 bg-gray-900' />
          <img src='https://img.youtube.com/vi/UrsmFxEIp5k/sddefault.jpg' alt='hii' className='h-60 w-96 rounded-lg m-10 bg-gray-900' />
        </div>
    </div>
    </>
  )
}

export default LandingPage