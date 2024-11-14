import React from 'react'
import { IndianRupee } from 'lucide-react';


const Course = ({courses}) => {
    
  return (
    <div className='grid grid-cols-3 gap-5'>
        {
            courses.map((item,index)=> (
                <div className='bg-slate-900 h-fit w-72 border border-gray-200 rounded-xl text-white ml-0 mb-10' key={index}>
                    <img src={item.imageUrl} className='rounded-t-3xl' />
                    <h1 className='pl-3 text-xl font-semibold'>{item.title}</h1>
                    <h2 className='pl-3 text-slate-300'>{item.description}</h2>
                    <div className='flex pl-2 mt-2 items-center'>
                        <IndianRupee size={16} />
                        <h2 className='font-bold'>{item.price}</h2>
                    </div>
                    <button className='bg-blue-700 text-white w-48 h-10 rounded-3xl ml-10 mr-10 mt-3 mb-3 '>View Details</button>
                </div>
            ))
        }
    </div>
  )
}

export default Course