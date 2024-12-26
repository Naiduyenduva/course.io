import React from 'react'
import { useState, useEffect } from 'react'
import Course from './Course';

const PurchasedCourses = ( {setIsLoggedIn}) => {
        const [purchasedData, setPurchasedData] = useState([]);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(true)

        useEffect(()=> {
            const token = localStorage.getItem('token');
            setIsLoggedIn(!!token);
          },[]);  

        useEffect(()=> {
            async function handleData () {
                try {
                    const token = localStorage.getItem('token');
                    const response = await fetch('https://course-io-muwx.vercel.app/user/purchases',{
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
                } finally {
                    setLoading(false)
                }
            }
            handleData();
        },[])

  return (
    <>
      {
          loading ? (
            <div className='pt-48 text-white bg-black h-screen text-center sm:text-5xl text-3xl font-semibold'>
            <h1>Loading...</h1>
            </div>
          ):(
              
            <div className='grid bg-black text-white min-h-screen'>
                <h1 className='text-white mt-24 font-bold text-center	text-2xl'>Purchased Courses</h1>
                <div className='ml-10 lg:ml-24 mt-5'>
                    <Course courses={purchasedData} />
                </div>
            </div>
        )
    }
              </>
  )
}

export default PurchasedCourses;