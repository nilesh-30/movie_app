import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Trending from './Components/Trending'

const App = () => {
  return (
    <div className='w-screen h-screen bg-black'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
      </Routes>
    </div>
  )
}

export default App