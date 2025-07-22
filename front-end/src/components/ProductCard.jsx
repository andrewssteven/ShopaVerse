import { HeartIcon, ShoppingCartIcon } from "@phosphor-icons/react"
import React from "react"
import { Link } from "react-router-dom"

const ProductCard = ({id, name, image, price}) => {
  return (
    <section>
    <Link to={`/productdetail/${id}`}>
    <div id={id} className="grid rounded-md p-3 h-full relative shadow-md hover:scale-101 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
        <HeartIcon size={25} className="absolute text-gray-400 hover:text-green-900 right-1 top-1 cursor-pointer" weight="fill"/>
        <img src={image} alt={`image`} className="w-full h-40 md:h-52 object-contain"/>
        <div className="space-y-1 ">
            <p>{name} </p>
            <div className="flex items-center justify-between">
            <p>${price}</p>
            <ShoppingCartIcon size={25} className="cursor-pointer hover:text-green-500"/>
            </div>
        </div>
    </div>
    </Link>
    </section>
  )
}

export default ProductCard