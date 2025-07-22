import React from 'react'
import { products } from '../products'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

const Hompage = () => {

 const fashionStyles = products.filter(product => product.category === "Fashion & Style").sort(() => 0.5 - Math.random()).slice(0, 6);
 const healthBeauty = products.filter(product => product.category === "Health & Beauty").sort(() => 0.5 - Math.random()).slice(0, 6);
 const homeAppliancies = products.filter(product => product.category === "Home Appliances").sort(() => 0.5 - Math.random()).slice(0, 6);
 const phonesTablets = products.filter(product => product.category === "Phones & Tablets").sort(() => 0.5 - Math.random()).slice(0, 6);
 const electronicsComputing = products.filter(product => product.category === "Electronics & Computing").sort(() => 0.5 - Math.random()).slice(0, 6);
 const sportsOutdoors = products.filter(product => product.category === "Sports & Outdoors").sort(() => 0.5 - Math.random()).slice(0, 6);

  return (
    <div className='space-y-2'>
      <Navbar/>
      <section className='grid grid-cols-2 md:grid-cols-4 gap-3 mx-2 md:mx-4 text-sm'>
        <div className='rounded-md cursor-pointer col-span-2 md:row-span-2 relative'>
          <img src="/src/assets/Xiaomi 15 Ultra_ A Leap into the Future of….jpg" alt="" className='w-full h-114 object-cover object-center rounded-md ' />
          <div className='absolute bottom-0 left-0 rounded-bl-sm bg-amber-500 text-white font-semibold px-2'>
            <p>Hot Deals Now <span className='text-red-800'>45% off</span></p>
          </div>
        </div>

        <div className='rounded-md cursor-pointer relative'>
          <img src="src/assets/f704951f-7f72-42a9-beb8-22994dbaba2f.jpg" alt="" className='object-cover h-48 md:h-55.5  rounded-md w-full'/>
          <div className='absolute bottom-0 left-0 rounded-bl-sm bg-amber-500 text-white font-semibold px-2'>
            <p>Exclusive Picks</p>
          </div>
        </div>

        <div className='rounded-md cursor-pointer relative'>
          <img src="src/assets/Experience the wild, magnetic charm of Dior….jpg" alt=""  className='object-cover h-48 md:h-55.5  rounded-md w-full '/>
          <div className='absolute bottom-0 left-0 rounded-bl-sm bg-amber-500 text-white font-semibold px-2'>
            <p>Best Sellers</p>
          </div>
        </div>

        <div className='rounded-md cursor-pointer relative'>
          <img src="src/assets/Want to know the secret kitchen appliance that's….jpg" alt="" className='object-cover h-48 md:h-55.5  rounded-md w-full'/>
          <div className='absolute bottom-0 left-0 rounded-bl-sm bg-amber-500 text-white font-semibold px-2'>
            <p>Free shipping</p>
          </div>
        </div>

        <div className='rounded-md cursor-pointer relative'>
          <img src="src/assets/Casual Shoes For Men.jpg" alt="" className='object-cover h-48 md:h-55.5  rounded-md w-full'/>
          <div className='absolute bottom-0 left-0 rounded-bl-sm bg-amber-500 text-white font-semibold px-2'>
            <p>Limited Stock</p>
          </div>
        </div>
      </section>

      {/* Browse category section */}
      <section className='space-y-2 hidden md:block'>
        <h2 className='text-2xl font-semibold mx-4'>Browse by Category</h2>
        <div className='grid grid-cols-4 gap-4 mx-2 md:mx-8'>

          <div className='cursor-pointer rounded-full border-2 border-gray-700 p-3 h-48 lg:w-70 grid place-items-center bg-[url("https://images.unsplash.com/photo-1608680582325-9f701aef1bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGFuZCUyMHN0eWxlcyUyMGl0ZW1zfGVufDB8fDB8fHww")] bg-cover bg-center'>
            <p className='font-semibold text-white '>Fashion & Style</p>
          </div>

          <div className='cursor-pointer border-2 border-gray-700 rounded-full p-3 h-48 lg:w-70 grid place-items-center bg-[url("https://media.istockphoto.com/id/1174598609/photo/set-of-contemporary-house-appliances-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=HFerD8kycf4v95US1-_wL5sptuBTiaoDNLMT29e_L88=")] bg-cover bg-center'>
            <p className='font-semibold text-white '>Home Appliances</p>
          </div>

          <div className='cursor-pointer border-2 border-gray-700 rounded-full p-3 h-48 lg:w-70 grid place-items-center bg-[url("https://images.unsplash.com/photo-1591815421748-5d50ffaf1ace?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob25lcyUyMGFuZCUyMHRhYmxldHN8ZW58MHx8MHx8fDA%3D")] bg-cover bg-center'>
            <p className='font-semibold text-white '>Phones & Tablets</p>
          </div>

          <div className='cursor-pointer border-2 border-gray-700 rounded-full p-3 h-48 lg:w-70 grid place-items-center bg-[url("https://images.unsplash.com/photo-1631730486784-5456119f69ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhbHRoJTIwYW5kJTIwYmVhdXR5fGVufDB8fDB8fHww")] bg-cover bg-center'>
            <p className='font-semibold text-white '>Health & Beauty</p>
          </div>

          <div className='cursor-pointer border-2 border-gray-700 rounded-full p-3 h-48 lg:w-70 grid place-items-center bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXViOhB2Ajoewps5NLT-2GkvlvwhFcw0C1A&s")] bg-cover bg-center'>
            <p className='font-semibold text-white '>Electronics & Computing</p>
          </div>

          <div className='cursor-pointer border-2 border-gray-700 rounded-full p-3 h-48 w-70 grid place-items-center bg-[url("https://media.istockphoto.com/id/949190756/photo/various-sport-equipments-on-grass.webp?a=1&b=1&s=612x612&w=0&k=20&c=l4jxu6unLiyRzE9lhT5xTobPRshiywDPrz33n-RqqUI=")] bg-cover bg-center'>
            <p className='font-semibold text-white '>Sports & Outdoors</p> 
          </div>
        </div>
      </section>

      {/* Fashion and style products*/}
      <section className='space-y-2'>
        <h2 className='text-xl font-semibold mx-4'>Fashion & Styles</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-4'>
        {
          fashionStyles.map((product) => (
            <ProductCard key={product.index} {...product} />
          ))
        }
        </div>
      </section>

      {/* Home Appliances */}
      <section className='space-y-2'>
        <h2 className='text-xl font-semibold mx-4'>Home Appliances</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-4'>
        {
          homeAppliancies.map((product) => (
            <ProductCard key={product.index} {...product} />
          ))
        }
        </div>

      {/* Phones & Tablets */}
      </section>

      {/* Phones & Tablets */}
      <section className='space-y-2'>
        <h2 className='text-xl font-semibold mx-4'>Phones & Tablets</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-4'>
        {
          phonesTablets.map((product) => (
            <ProductCard key={product.index} {...product} />
          ))
        }
        </div>
      </section>

      {/* Health & Beauty */}
      <section className='space-y-2'>
        <h2 className='text-xl font-semibold mx-4'>Health & Beauty</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-4'>
        {
          healthBeauty.map((product) => (
            <ProductCard key={product.index} {...product} />
          ))
        }
        </div>
      </section>

      {/* Electronics & Computing */}     
      <section className='space-y-2'>
        <h2 className='text-xl font-semibold mx-4'>Electronics & Computing</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-4'>
        {
          electronicsComputing.map((product) => (
            <ProductCard key={product.index} {...product} />
          ))
        }
        </div>
      </section>

      {/* Sports & Outdoors */}
      <section className='space-y-2'>
        <h2 className='text-xl font-semibold mx-4'>Sports & Outdoors</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-4'>
        {
          sportsOutdoors.map((product) => (
            <ProductCard key={product.index} {...product} />
          ))
        }
        </div>
      </section>

    <Footer/>
    </div>
  )
}

export default Hompage