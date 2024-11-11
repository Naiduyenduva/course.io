import React from 'react'
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

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
      
    } catch(err) {
      setError(err.message)
    }
  }

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
          <input 
          type='text'
          name='email'
          required={true}
          value={email}
          onChange={handleEmailChange}
          /><br/>
          <input 
          type='password'
          name='password'
          required={true}
          value={password}
          onChange={handlePasswordChange}
          /><br/>
          <button>Login</button>
      </form>
    </div>
  </>
  )
}

export default Login