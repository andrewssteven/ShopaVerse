import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HealthBeauty from '../pages/HealthBeauty'
import FashionStyle from '../pages/FashionStyle'
import ElectronicsComputing from '../pages/ElectronicsComputing'
import HomeAppliancies from '../pages/HomeAppliancies'
import PhonesTablets from '../pages/PhonesTablets'
import SportsOutdoors from '../pages/SportsOutdoors'
import { products } from '../products'
import Cart from '../pages/Cart'
import Hompage from '../pages/Hompage'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import ProductDetails from '../components/ProductDetails'


const Pageroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/healthbeauty' element={<HealthBeauty/>} />
        <Route path='/fashionstyle' element={<FashionStyle/>} />
        <Route path='/electronicscomputing' element={<ElectronicsComputing/>} />
        <Route path='/homeappliancies' element={<HomeAppliancies/>} />
        <Route path='/phonestablets' element={<PhonesTablets/>} />
        <Route path='/sportsoutdoors' element={<SportsOutdoors/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/productdetail/:id' element={<ProductDetails products={products}/>} />
        <Route path='/' element={<Hompage/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default Pageroutes