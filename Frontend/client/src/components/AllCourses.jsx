import React, { useState,useEffect } from 'react'
import Course from './Course'

const AllCourses = ({isLoggedIn}) => {

  const [allCourses, setAllCourses] = useState([]);
  const [loggedin, setLoggedIn] = useState(false)
  const [error, setError] = useState(null);

  useEffect(()=> {
    const token = localStorage.getItem('token');
    if(token) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
    async function handleData () {
        try {
            const response = await fetch('https://course-io.onrender.com/course/preview',{
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const fetchedData = await response.json();
              setAllCourses(fetchedData.courses)
              console.log(allCourses);
        } catch(err) {
            setError(err.message)
        }
    }
    handleData();
},[])

  return (
    <div>
        <div className='grid bg-black gap-3'>
          <h1 className='text-white mt-24 font-bold text-center	text-2xl'>Our Courses</h1>
            <div className='text-red-900 ml-28 '>
                <Course courses={allCourses} logged={loggedin} />
            </div>
        </div>
    </div>
  )
}

export default AllCourses;