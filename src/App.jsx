import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'

const App = () => {
  return (
    <div className='w-screen h-screen bg-black'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App