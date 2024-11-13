import './App.css'
import LandingPage from './components/LandingPage'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
    <nav className='fixed w-full'>
      <Navbar />
    </nav>
    <div>
      <Routes>
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