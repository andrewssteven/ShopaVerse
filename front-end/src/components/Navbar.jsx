import React, { useState } from 'react'
import Button from './Button'
import { HeartIcon, ListIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@phosphor-icons/react'


const Navbar = () => {

    const [favorites] = useState(0);

  return (
    <nav className='flex justify-between items-center mx-2 md:mx-4 md:p-4 p-3'>
        {/* hamburger for mobile */}
        <div className='flex items-center gap-2'>
            <ListIcon size={28} weight="light" className='cursor-pointer md:hidden' />
            <p><span className='text-xl  cursor-pointer '>S</span>hopaVerse</p>
        </div>
        
        {/* <ul className='flex items-center gap-4'>
            <li>Home</li>
        </ul> */}



        {/* search bar */}
        <div className='px-2 py-1  rounded-md relative border-1 hidden md:block '>
            <input type="text" name="" id="" placeholder='Search our store' className='outline-0 w-120 '/>
            <MagnifyingGlassIcon size={28} weight="light" className='absolute right-0.5 top-0 cursor-pointer'/>
        </div>

        <div className='flex items-center gap-2 md:gap-4'>
            <UserIcon size={28} weight="light" className='cursor-pointer' />
            <HeartIcon size={28} weight="light" className='cursor-pointer hidden md:block' />
            <div className='relative cursor-pointer'>
            <ShoppingCartIcon size={28} weight="light" className='cursor-pointer' />
            <span className='bg-green-400 text-red-600 rounded-md px-1 py-0 text-xs font-semibold  absolute -top-1 -right-0.5 '>{favorites}</span>
            </div>
        </div>
        {/* <div className='flex items-center gap-2'>
            <Button text={`Sign Up`}/>
            <Button text={`Sign In`}/>
        </div> */}
    </nav>
  )
}

export default Navbar