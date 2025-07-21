import React from 'react'
import Hompage from './pages/Hompage'
import { Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hompage />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default App