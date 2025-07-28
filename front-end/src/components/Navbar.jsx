import React, { useState } from 'react'
import Button from './Button'
import { BagIcon, HeartIcon, ListIcon, MagnifyingGlassIcon, ShoppingCartIcon, TelevisionIcon, UserIcon, XCircleIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const cart = useSelector((state) => state.cart.length);

    const toggleMenu = () => {
        setIsOpen(!isOpen);}

  return (
    <nav className='fixed bg-white w-full -top-1 left-0 flex justify-between items-center md:px-6 md:p-4 py-2 px-3 z-10'>
        
        {/* hamburger for mobile */}
        <div className='flex items-center gap-2'>
            <ListIcon size={28} weight="light" className={ 'cursor-pointer md:hidden'} onClick={toggleMenu} />
            <Link to={'/'}>
            <p><span className='text-xl  cursor-pointer '>S</span>hopaVerse</p>
            </Link>
        </div>

        {/* toggle menu */}
        <div className={`z-10 fixed inset-0 flex flex-col gap-10 h-full w-[70%] bg-white p-4 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <XCircleIcon size={30} onClick={toggleMenu}/>
            
            <Link to={'/fashionstyle'}>
            <div className='flex gap-3 cursor-pointer group ' onClick={toggleMenu}>
            <BagIcon size={28} weight="light"/>
            <p className='flex gap-3 group-hover:text-red-500'>Fashion & Style</p>
            </div>
            </Link>

            <Link to={'/electronicscomputing'}>
            <div className='flex gap-3 cursor-pointer group ' onClick={toggleMenu}>
            <TelevisionIcon size={28} weight="light"/>
            <p className='flex gap-3 group-hover:text-red-500'>Electronics & Computing</p>
            </div>
            </Link>

            <Link to={'/homeappliancies'}>
            <div className='flex gap-3 cursor-pointer group ' onClick={toggleMenu}>
            <img src="https://img.icons8.com/?size=100&id=poofZ8KYLKLi&format=png&color=000000" alt="" className='h-7.5 w-7.5'/>
            <p className='flex gap-3 group-hover:text-red-500'>Home Appliances</p>
            </div>
            </Link>

            <Link to={'/sportsoutdoors'}>
            <div className='flex gap-3 cursor-pointer group ' onClick={toggleMenu}>
            <img src="https://img.icons8.com/?size=100&id=196&format=png&color=000000" alt="" className='h-7.5 w-7.5'/>
            <p className='flex gap-3 group-hover:text-red-500'>Sports and Outdoors</p>
            </div>
            </Link>

            <Link to={'/phonestablets'}>
            <div className='flex gap-3 cursor-pointer group ' onClick={toggleMenu}>
            <img src="https://img.icons8.com/?size=100&id=65983&format=png&color=000000" alt="" className='h-7.5 w-7.5'/>
            <p className='flex gap-3 group-hover:text-red-500'>Phones & Tablets</p>
            </div>
            </Link>

            <Link to={'/healthbeauty'}>
            <div className='flex gap-3 cursor-pointer group ' onClick={toggleMenu}>
            <img src="https://img.icons8.com/?size=100&id=MyV06oafbDPL&format=png&color=000000" alt="" className='h-7.5 w-7.5'/>
            <p className='flex gap-3 group-hover:text-red-500'>Heath and Beauty</p>
            </div>
            </Link>

            <div className='flex gap-3 cursor-pointer group ' onClick={toggleMenu}>
            <img src="https://img.icons8.com/?size=100&id=12023&format=png&color=000000" alt="" className='h-7.5 w-7.5'/>
            <p className='flex gap-3 group-hover:text-red-500'>New!</p>
            </div>

            <div className='flex gap-3 cursor-pointer group ' onClick={toggleMenu}>
            <img src="https://img.icons8.com/?size=100&id=6703&format=png&color=000000" alt="" className='h-7.5 w-7.5'/>
            <p className='flex gap-3 group-hover:text-red-500'>Flash Sales</p>
            </div>

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
                    <div className='hidden md:group-hover:flex flex-col gap-2 p-2 h-40 w-52 border absolute -left-45 top-7  bg-white z-10'>
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
                    <div className='p-3  space-y-2 absolute md:group-hover:flex flex-col gap-2 w-62 border top-7 -left-55 bg-white hidden z-10'>
                       <p>Something catch your eye?</p>
                        <ol className='list-decimal list-inside space-y-1 ' >
                            <li>Save it to Fovarrites</li>
                            <li>Create a Mood Board</li>
                            <li>See it all together</li>
                        </ol>
                    </div>
            </div>

            <div className='relative group'>
            <Link to={'/cart'}>
            <ShoppingCartIcon size={28} weight="light" className='cursor-pointer'/>
            </Link>
            <span className='bg-green-400 text-red-600 rounded-md px-1 py-0 text-xs font-semibold  absolute -top-1 -right-0.5 '>{cart}</span>
            {/* dropdown or hover */}
            <div className='p-4 space-y-3  absolute md:group-hover:flex flex-col gap-2 w-72 border -left-65 top-8 bg-white hidden z-10'>
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