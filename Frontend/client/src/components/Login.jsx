import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
      setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
 }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/user/signin',{
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({email,password})
      });
      
      if(response.ok) {
        alert('logged in successfully');
      } else {
        throw new Error ('invalid credentials')
      }
      const data = await response.json();
      localStorage.setItem('token',data.token)
      navigate('/p')
      
    } catch(err) {
      setError(err.message)
    }
  }

  return (
    <>
    <div className='grid justify-center items-center min-h-screen max-h-fit text-black bg-black '>
      <div className='rounded-lg max-w-[700px] w-full h-fit text-white font-medium text-xl'>
        <h1 className="text-[#d4d4d8] text-xl font-semibold mb-5 tracking-tighter sm:text-4xl md:text-5xl lg:text-4xl/none">Login to your account</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label><br/>
          <input 
          className='rounded-lg h-12 w-500 p-2 bg-gray-900 mt-3 text-white'
          type='text'
          name='email'
          required={true}
          value={email}
          onChange={handleEmailChange}
          /><br/>
          <label>Password</label><br/>
          <input
          className='rounded-lg h-12 w-500 p-2 bg-gray-900 mt-3 text-white mb-5'
          type='password'
          name='password'
          required={true}
          value={password}
          onChange={handlePasswordChange}
          /><br/>
          <button className='bg-blue-600 text-white w-500 p-0 h-12 rounded-lg'>Login</button>
      </form>
      </div>
      </div>
  </>
  )
}

export default Login