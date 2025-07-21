import React from 'react'
import Button from '../components/Button'


const Signup = () => {
  return (
    <div className='grid place-items-center h-screen'>
      <form action="" className='p-4 flex flex-col w-120 h-100   space-y-4 border rounded-md'>
        <input type="text" name='name' placeholder='Enter your name' className='rounded-md px-2 outline-0 border border-green-400 '/>
        <input type="text" name='Email' placeholder='example@gmail.com' className='rounded-md px-2 outline-0 border border-green-400 '/>
        <input type="password" name='password' placeholder='Enter password' className='rounded-md px-2 outline-0 border border-green-400 '/>
        <Button text={'Sign Up'} className={'cursor-pointer'}/>
      </form>
    </div>
  )
}

export default Signup