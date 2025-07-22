import React from 'react'
import Hompage from './pages/Hompage'
import { Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ProductDetails from './components/ProductDetails'
import { products } from './products'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/productdetail/:id' element={<ProductDetails products={products}/>} />
        <Route path='/' element={<Hompage/>} />
        <Route path="/" element={<Hompage />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default App