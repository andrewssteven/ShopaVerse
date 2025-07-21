import React, { useState } from 'react'
import Button from './Button'
import { HeartIcon, ListIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [cart, setCart] = useState(0);

  return (
    <nav className='flex justify-between items-center mx-2 md:mx-4 md:p-4 p-3'>
        {/* hamburger for mobile */}
        <div className='flex items-center gap-2'>
            <ListIcon size={28} weight="light" className='cursor-pointer md:hidden' />
            <p><span className='text-xl  cursor-pointer '>S</span>hopaVerse</p>
        </div>

        {/* search bar */}
        <div className='px-2 py-1  rounded-md relative border-1 hidden md:block '>
            <input type="text" name="" id="" placeholder='Search our store' className='outline-0 w-120 '/>
            <MagnifyingGlassIcon size={28} weight="light" className='absolute right-0.5 top-0 cursor-pointer hover:text-gray-600'/>
        </div>

        {/* navbar rightside. user, cart and wishlist */}
        <div className='flex items-center gap-2 md:gap-4'>
            <div className='relative group'>
                <UserIcon size={28} weight="light" className='cursor-pointer' />
                    {/* user dropdown or hover effect */}
                    <div className='hidden md:group-hover:flex flex-col gap-2 p-2 h-40 w-52 border absolute -left-45 top-7 z-10'>
                        <div className={'cursor-pointer'}>Orders</div>
                        <div className={'cursor-pointer'}>My Account</div>
                        <Link to={'/signin'} className='cursor-pointer'>
                        <Button text={'Sign in'} className={'cursor-pointer w-full'}/>
                        </Link>
                        <Link to={'/signup'} className='cursor-pointer'>
                        <Button text={'Register'} className={'cursor-pointer w-full'}/>
                        </Link>
                    </div>
            </div>

            <div className='relative group'>
                <HeartIcon size={28} weight="light" className='cursor-pointer hidden md:block' />
                    {/* wishlist dropdown */}
                    <div className='p-3  space-y-2 absolute md:group-hover:flex flex-col gap-2 w-62 border top-7 -left-55 hidden z-10'>
                       <p>Something catch your eye?</p>
                        <ol className='list-decimal list-inside space-y-1 ' >
                            <li>Save it to Fovarrites</li>
                            <li>Create a Mood Board</li>
                            <li>See it all together</li>
                        </ol>
                    </div>
            </div>

            <div className='relative group'>
            <ShoppingCartIcon size={28} weight="light" className='cursor-pointer' onClick={()=>setCart(cart + 1 )} />
            <span className='bg-green-400 text-red-600 rounded-md px-1 py-0 text-xs font-semibold  absolute -top-1 -right-0.5 '>{cart}</span>
            {/* dropdown or hover */}
            <div className='p-4 space-y-3  absolute md:group-hover:flex flex-col gap-2 w-72 border -left-65 top-8 hidden z-10'>
                <p>Are you missing items in your cart?</p>
                <p><span>Sign in</span> to see items you may have added using another computer or device</p>
                <Button text={'VIEW CART'}/>
            </div>

            </div>

        </div>
    </nav>
  )
}

export default Navbar