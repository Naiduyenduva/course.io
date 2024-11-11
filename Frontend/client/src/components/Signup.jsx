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
    <div>
      <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="email" 
            required={true}
            value={formData.email}
            onChange={handleChange}
          /><br/>

          <input 
            type="text" 
            name="password" 
            required={true}
            value={formData.password}
            onChange={handleChange}
          /><br/>

          <input 
            type="text" 
            name="fullName" 
            required={true}
            value={formData.fullName}
            onChange={handleChange}
          /><br/>
          <button>Signup</button>
      </form>
    </div>
    </>
  )
}

export default Signup