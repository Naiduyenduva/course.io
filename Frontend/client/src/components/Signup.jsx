import React from 'react'
import { useState } from 'react'

const Signup = () => {

      const initialFormData = {
        email : '',
        password: '',
        fullName: ''
      }

      const [formData, setFormData] = useState(initialFormData);
      const [error, setError] = useState(null)

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const response = await fetch('https://course-io.onrender.com/user/signup',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          if(response.ok) {
            alert('signup successfully');
            setFormData(initialFormData)
          } else {
            throw new Error('email already exists');
          }
        } catch (err){
          setError(err.message)
        }
      }

  return (
    <>
    <div className='grid justify-center place-items-center min-h-screen text-black bg-black pt-8 '>
      <div className='pt-8 rounded-lg h-fit max-w-[700px] w-full text-white font-medium text-xl'>
        <h1 className="text-[#d4d4d8] text-xl font-semibold tracking-tighter sm:text-4xl md:text-5xl lg:text-4xl/none mb-5">Create your account</h1>
          <form onSubmit={handleSubmit}>
            <label>Email</label><br/>
              <input 
                className='rounded-lg h-12 w-500 p-2 bg-gray-900 mt-3 text-white'
                type="text" 
                name="email" 
                required={true}
                value={formData.email}
                onChange={handleChange}
                /><br/>
            <label>Password</label><br/>
              <input 
                type="text" 
                className='rounded-lg w-500 h-12 p-2 bg-gray-900 mt-3 text-white'
                name="password" 
                required={true}
                value={formData.password}
                onChange={handleChange}
                /><br/>
            <label>Fullname</label><br/>
              <input 
                type="text" 
                className='rounded-lg mb-5 w-500 h-12 bg-gray-900 mt-3 text-white'
                name="fullName" 
                required={true}
                value={formData.fullName}
                onChange={handleChange}
                /><br/>
              <button className='bg-blue-600 text-white w-500 p-0 h-12 rounded-lg '>Signup</button>
                <h1 className='mt-3'>Alread have an account? Login</h1>
          </form>
      </div>
    </div>
    </>
  )
}

export default Signup