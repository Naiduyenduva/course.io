import React from 'react'
import { IndianRupee } from 'lucide-react';


const Course = () => {
    
    const images = [
        {
            title: "Python Full stack",
            price: "2390",
            Description: "Python + Django + Flask etc..",
            image: "https://img.youtube.com/vi/UrsmFxEIp5k/mqdefault.jpg"
        },
        {
            title: "Java Full stack",
            price: "2090",
            Description: "Java + Spring + Springboot etc..",
            image: "https://img.youtube.com/vi/L0v_3MzC1io/mqdefault.jpg"
        },
        {
            title: "MERN Stack",
            price: "2499",
            Description: "Node + Express + React + Mongo etc..",
            image: "https://img.youtube.com/vi/fwwOkyKpBDM/mqdefault.jpg"
        },
        {
            title: "Artificial intelligence course",
            price: "2390",
            Description: "Python + Django + Flask etc..",
            image: "https://img.youtube.com/vi/7IgVGSaQPaw/mqdefault.jpg"
        },
        {
            title: "Data structures & Algorithms",
            price: "2090",
            Description: "Java + Spring + Springboot etc..",
            image: "https://img.youtube.com/vi/rZ41y93P2Qo/mqdefault.jpg"
        }
    ]
  return (
    <div className='grid grid-cols-3 gap-5'>
        {
            images.map((item,index)=> (
                <div className='bg-slate-900 h-fit w-72 border border-gray-200 rounded-xl text-white m-5 ml-0'>
                    <img src={item.image} className='rounded-t-3xl' />
                    <h1 className='pl-3 text-xl font-semibold'>{item.title}</h1>
                    <h2 className='pl-3 text-slate-300'>{item.Description}</h2>
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