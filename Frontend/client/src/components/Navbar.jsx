import React from 'react'
import {Link} from 'react-router-dom'
import { BookOpenText } from 'lucide-react';


export const Navbar = ({isLoggedIn,setIsLoggedIn}) => {

  function logout() {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }

  return (
    <>
        <div className='flex justify-between bg-black h-20 pt-4 text-center gap-20 text-xl font-semibold border border-black border-b-slate-900'>
          <div className='flex gap-2 ml-20'>
          <Link to='/'><BookOpenText color='white' className='mt-2'/></Link>
            <h1 className='text-blue-200 font-bold text-2xl'>Course.io</h1>
          </div>
          {isLoggedIn ? (
               <>
               <Link to='/'><button onClick={logout} className='p-2 h-10 rounded-lg text-sm w-20 bg-blue-600 text-white mr-10'>Logout </button> </Link> 
               </>
            ) : (
          <div className='flex justify-center gap-5 mr-20'>
            <Link to='/signup'><button className='p-2 h-10 rounded-lg text-sm w-20 bg-blue-600 text-white'>Signup</button></Link>
            <Link to='login'><button className='p-2 w-20 h-10 bg-blue-600 rounded-lg text-white text-sm'>Login</button></Link>
          </div>
                )}
        </div>
    </>
  )
}

export default Navbar;