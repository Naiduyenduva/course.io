import React from 'react'
import { useState, useEffect } from 'react'
import Course from './Course';

const PurchasedCourses = ( {setIsLoggedIn}) => {
        const [purchasedData, setPurchasedData] = useState([]);
        const [error, setError] = useState(null);

        useEffect(()=> {
            const token = localStorage.getItem('token');
            setIsLoggedIn(!!token);
          },[]);  

        useEffect(()=> {
            async function handleData () {
                try {
                    const token = localStorage.getItem('token');
                    const response = await fetch('https://course-io.onrender.com/user/purchases',{
                        method:'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'token': token
                        },
                    });
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                      }
                      const fetchedData = await response.json();
                      setPurchasedData(fetchedData.courseData)
                      console.log(purchasedData);
                } catch(err) {
                    setError(err.message)
                }
            }
            handleData();
        },[])

  return (
    <div className='grid bg-black text-white min-h-screen'>
              <h1 className='text-white mt-24 font-bold text-center	text-2xl'>Purchased Courses</h1>
        <div className='ml-24'>
            <Course courses={purchasedData} />
        </div>
    </div>
  )
}

export default PurchasedCourses;