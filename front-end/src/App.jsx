import React from 'react'
import Hompage from './pages/Hompage'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hompage />} />
      </Routes>
    </div>
  )
}

export default App