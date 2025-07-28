import { TrashIcon } from '@phosphor-icons/react'
import React from 'react'
import { removeFromCart } from '../Redux/actions'
import { useDispatch } from 'react-redux'

const Cartcard = ({id, image, name, stock, price}) => {

    const dispatch = useDispatch()

  return (
    <div>
        {/* product image, name, stock and price */}
        <div className='flex justify-between w-full'>
            <div className='flex gap-4'>
                <img src={image} alt="" className='h-30 w-30 object-contain '/>
                <div>
                    <p>{name}</p>
                    <p>{stock} units left</p>
                </div>
            </div>
            <p>${price} </p>
        </div>

        {/* remove and increase/reduce item count*/}
        <div className='flex justify-between w-full'>
            <div className='flex gap-2 items-center cursor-pointer'>
                <TrashIcon onClick={()=> dispatch(removeFromCart(id))}/>
                <p>Remove</p>
            </div>

            {/* item increase or reduce */}
            <div className="flex items-center select-none">
            <p className="border border-neutral-500 py-0 px-2  cursor-pointer">-</p>
            <p className="border border-neutral-500 py-0 px-2  ">0</p>
            <p className="border border-neutral-500 py-0 px-2  cursor-pointer">+</p>
            </div>
        </div>
    </div>
  )
}

export default Cartcard