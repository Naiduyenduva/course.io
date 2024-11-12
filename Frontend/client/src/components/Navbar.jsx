import React from 'react'

export const Navbar = () => {
  return (
    <>
        <div className=' flex justify-around h-10 mb-20 pt-4 text-blue-200 text-center gap-20 text-xl font-semibold'>
          <div>
            <h1>Course.io</h1>
            </div>
          <div className='flex justify-center gap-5'>
            <h1>Signup</h1>
            <h1>Login</h1>
          </div>
        </div>
    </>
  )
}

export default Navbar;
