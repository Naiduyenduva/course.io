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
          const response = await fetch('http://localhost:3000/user/signup',{
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
    <div className='grid justify-center place-items-center border border-black text-3xl text-black bg-black h-screen font-semibold'>
        <h1 className="text-[#d4d4d8] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-10">Hello Master Welcome</h1>
      <div className='p-16 pt-24 border-2 border-black rounded-lg mb-10 h-600 w-700 bg-slate-100'>
          <form onSubmit={handleSubmit}>
            <label>Email</label><br/>
              <input 
                className='border-2 border-stone-900 rounded-lg h-14 w-500 p-2'
                type="text" 
                name="email" 
                required={true}
                value={formData.email}
                onChange={handleChange}
                /><br/>
            <label>Password</label><br/>
              <input 
                type="text" 
                className='border-2 border-stone-900 rounded-lg w-500 h-14 p-2'
                name="password" 
                required={true}
                value={formData.password}
                onChange={handleChange}
                /><br/>
            <label>Fullname</label><br/>
              <input 
                type="text" 
                className='border-2 border-stone-900 rounded-lg mb-5 w-500 h-14 '
                name="fullName" 
                required={true}
                value={formData.fullName}
                onChange={handleChange}
                /><br/>
              <button className='bg-blue-600 text-white w-500 p-0 h-14 rounded-lg '>Signup</button>
          </form>
      </div>
    </div>
    </>
  )
}

export default Signup