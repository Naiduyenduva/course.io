import './App.css'
import LandingPage from './components/LandingPage'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import AllCourses from './components/AllCourses'
import PurchasedCourses from './components/PurchasedCourses'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <Router>
    <nav className='fixed w-full'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </nav>
    <div>
      <Routes>
        <Route path='/purchasedCourses' element={<PurchasedCourses setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/allCourses' element={<AllCourses isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
    </Router>
    </>
  )
}

export default App