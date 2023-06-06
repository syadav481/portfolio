import './App.css'
import Projects_ECs from './components/Projects_ECs'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <Navbar />
      <div className='main-page-container'>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/Projects_ECs' element={<Projects_ECs />} /> 
        </Routes>
      </div>
    </>
  )
}

export default App
