import React from 'react'
import {House} from 'lucide-react'
import {FileVideo } from 'lucide-react'

const Sidebar = () => {
  return (
    <div>
        <div className='border-2 border-black min-h-screen w-40 text-white bg-slate-900	 pt-20 pl-5'>
            Menu
            <div className='flex gap-3 mt-5'>
                <House size={20} />
                <h2>Home</h2>
            </div>
            <div className='flex gap-3 mt-5'>
                <FileVideo size={20}/>
                <h2>Courses</h2>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;