import React, { useEffect, useState } from 'react'
import { IndianRupee } from 'lucide-react';


const Course = ({courses,logged,onSenddata}) => {
        // const [courseid, setCourseid] = useState(null);

        // function handleCourseid (item) {
        //    setCourseid(item._id)
        // }
        // console.log(courseid);

        // const sendMessageToParent = () => {
        //     onSenddata(courseid);
        //   };
    
  return (
    <div className='grid grid-cols-3 gap-5'>
        {
            courses.map((item)=> (
                <div className='bg-slate-900 h-fit w-72 border border-gray-200 rounded-xl text-white ml-0 mb-10' key={item._id}>
                    <img src={item.imageUrl} className='rounded-t-3xl' />
                    <h1 className='pl-3 text-xl font-semibold'>{item.title}</h1>
                    <h2 className='pl-3 text-slate-300'>{item.description}</h2>
                    <div className='flex pl-2 mt-2 items-center'>
                        <IndianRupee size={16} />
                        <h2 className='font-bold'>{item.price}</h2>
                    </div>
                    {
                        logged ? (
                            <div className='flex'>
                            <button className='bg-blue-700 text-white w-24 h-8 rounded-3xl ml-7 mr-5 mt-3 mb-3 p-1 '>View Details</button>
                            <button className='bg-green-700 text-white w-24 h-8 rounded-3xl mt-3 mb-3' onClick={()=>{onSenddata(item._id);}}>Purchase</button>
                            </div>
                        ) : (
                            <>
                            <button className='bg-blue-700 text-white w-48 h-10 rounded-3xl ml-10 mr-10 mt-3 mb-3 '>View Details</button>
                            </>
                        )
                    }
                </div>
            ))
        }
    </div>
  )
}

export default Course