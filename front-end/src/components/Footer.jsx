import { AppStoreLogoIcon, EnvelopeIcon, FacebookLogo, FacebookLogoIcon, GooglePlayLogoIcon, InstagramLogoIcon, MailboxIcon, StripeLogoIcon, TwitterLogoIcon, XLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react'
import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
    <footer className=''>
        <section className='w-full text-white lg:h-40 grid grid-cols-1 md:flex md:gap-10 lg:gap-50 p-4 space-y-8 lg:px-20 bg-neutral-700'> 
            {/* right side, Logo and name */}
            <h1><span className='text-2xl'>s</span>hopaVerse</h1>

            {/* left side, 2 sections newsletter and download information */}
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-0  lg:gap-13 space-y-6'>
                
                {/* newsletter section */}
                <div className='space-y-2 md:px-3'>
                   <p className='uppercase'>new to shopaverse?</p>
                   <p>Subcribe to our newsletter to get updates on our latest offers!</p>
                    
                    {/* input section */}
                    <div className='flex flex-wrap gap-3'>
                        <div className='flex items-center gap-2 bg-white rounded-md p-2'>
                            <EnvelopeIcon  size={23} className='text-zinc-600 '/>
                            <input type="text" placeholder='Enter E-mail Address' className=' caret-gray-500 outline-0 text-black placeholder-gray-500' />
                        </div>
                        <Button text={'Subcribe'} className={'text-white rounded-md'}/>
                    </div>

                    {/* <div className='flex gap-3 items-center mt-4 '>
                        <input type="checkbox" className='outline-0 border-2 text-amber-200  border-zinc-400 '/>
                        <div>
                        <p>I agree to jumia's Privacy and cookie Policy. You can unsucribe from newsletters at any time</p>
                        <p className='text-amber-100 text-sm '>I accept the Legal Terms</p>
                        </div>
                    </div> */}
                </div>

                {/* download information */}
                <div className='flex flex-col gap-4 md:gap-6 md:px-3'>
                    <div className='flex gap-3'>
                        {/* <div><span>S</span>hopaVerse</div> */}
                        <div className='space-y-1 '>
                            <p className='uppercase text-white '>download shopaverse free app</p>
                            <p>Get access to exclusive offers!</p>
                        </div>
                    </div>

                    {/* download app section */}
                    <div className='flex justify-between'>
                        <div className='flex items-center hover:text-red-600 cursor-pointer  gap-2'>
                            <AppStoreLogoIcon size={25}/>
                            <div>
                                <p className='text-sm '>Download on the</p>
                                <p className='text-base  '>App Store</p>
                            </div>
                        </div>
                
                        <div className='flex items-center hover:text-red-600 cursor-pointer gap-2'>
                            <GooglePlayLogoIcon size={30}/>
                            <div className=''>
                                <p className='text-sm '>Get it on</p>
                                <p className='text-base '>App Store</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* main footer section */}
        <section className='w-full bg-black/90 text-sm space-y-4 md:gap-10 grid grid-cols-2 md:grid-cols-4  text-white p-4 md:px-20'>
            {/* footer side 1 */}
            <div className='space-y-6 '>
                {/* help section */}
                <div>
                    <p className='uppercase mb-2 text-sm font-semibold'>need help?</p>
                    <p className='hover:underline cursor-pointer text-sm w-fit'>Chat with us</p>
                    <p className='hover:underline cursor-pointer text-sm w-fit'>Help Center</p>
                    <p className='hover:underline cursor-pointer text-sm w-fit'>Contact Us</p>
                </div>

                {/* useful link section */}
                <div>
                    <p className='uppercase mb-2 font-semibold'>useful links</p>
                    <p className='hover:underline cursor-pointer text-sm w-fit'>Service Center</p>
                    <p className='hover:underline cursor-pointer text-sm w-fit'>Devlivery Options and timeline</p>
                    <p className='hover:underline cursor-pointer text-sm w-fit'>Report a Product</p>
                    <p className='hover:underline cursor-pointer text-sm w-fit'>Dispute Resolution Policy</p>
                    <p className='hover:underline cursor-pointer text-sm w-fit'>Corporate adn bulk purchases</p>
                    <p className='hover:underline cursor-pointer text-sm w-fit'>Return Policy</p>
                </div>
            </div>

            {/* footer side 2 */}
            <div>
                <p className='uppercase mb-2 font-semibold'>about shopaverse</p>
                <p className='hover:underline cursor-pointer text-sm w-fit'>About us</p>
                <p className='hover:underline cursor-pointer text-sm w-fit'>Terms and  Condition</p>
                <p className='hover:underline cursor-pointer text-sm w-fit'>Privacy Notice</p>
                <p className='hover:underline cursor-pointer text-sm w-fit'>Cookie Notice</p>
                <p className='hover:underline cursor-pointer text-sm w-fit'>About us</p>
                <p className='hover:underline cursor-pointer text-sm w-fit'>Flash Sales</p>
            </div>

            {/* social and more */}
            <div className='space-y-6 '>
                <div>
                    <p className='uppercase mb-2 font-semibold'> make money with shopaverse</p>
                    <p className='hover:underline cursor-pointer text-sm w-fit'>Sell on shopaverse</p>
                    <p className='hover:underline cursor-pointer text-sm w-fit'>Vendor Hub</p>
                    <p className='hover:underline cursor-pointer text-sm w-fit'>Become a Sales Consultant</p>
                </div>

                {/* socials */}
                <div >
                    <p className='uppercase mb-2 font-semibold'>join us on</p>
                    <div className='flex gap-4' >
                        <FacebookLogo size={28} weight='fill' className='hover:text-red-600 cursor-pointer'/>
                        <YoutubeLogoIcon size={28} className='hover:text-red-600 cursor-pointer'/>
                        <InstagramLogoIcon size={28} className='hover:text-red-600 cursor-pointer'/>
                        <XLogoIcon size={28} className='hover:text-red-600 cursor-pointer'/>
                    </div>
                </div>
            </div>

            {/* payments */}
            <div>
                <p className='uppercase mb-2 font-semibold'>payment methods</p>
                <div className='flex gap-4'>
                <img src="/images/icons8-stripe-50.png" alt="" className='h-10 w-10 ' />
                <img src="/images/icons8-visa-50.png" alt="" className='h-10 w-10 ' />
                </div>

            </div>

        </section>
    </footer>
  )
}

export default Footer