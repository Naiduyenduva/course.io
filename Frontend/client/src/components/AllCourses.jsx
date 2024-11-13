import React from 'react'
import Sidebar from './Sidebar'
import Course from './Course'

const AllCourses = () => {
  return (
    <div>
        <div className='flex bg-black'>
            <Sidebar />
            <div className='text-black mt-24 ml-16 '>
                <Course />
            </div>
        </div>
    </div>
  )
}

export default AllCourses;