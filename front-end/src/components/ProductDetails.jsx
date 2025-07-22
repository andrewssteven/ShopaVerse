import React, { useState } from "react";
import Button from "./Button";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductDetails = ({ products }) => {
  const [qty, setQty] = useState(0);

  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p className="text-center">Product not found</p>;
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 6);

  return (
    <div>
      <Navbar />
      <div className="space-y-2">
        <div className="w-full md:h-10 grid place-items-center bg-black/90 text-white">
          <p className="text-center font-semibold uppercase">product details</p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 md:mx-20  md:gap-9">
          <div className="shadow-lg  grid place-items-center ">
            <img src={product.image} alt="" className="h-100 w-90 object-contain"/>
          </div>

          {/* product details */}
          <div className="space-y-3">
            <p className="font-semibold text-xl ">{product.name}</p>
            <div></div>

            {/* color  */}
            <div className="flex flex-col gap-2">
              <p>color</p>

              <div className="flex gap-2">
                {product.color.map((color) => (
                  <p className="border border-b-gray-500 p-2">{color}</p>
                ))}
              </div>
            </div>

            {/* sizes  */}
            <div className="flex  space-y-1 flex-col gap-2">
              <p>size</p>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <p className="border border-b-gray-500 p-2">{size}</p>
                ))}
              </div>
            </div>

            {/* Qty */}
            <div className="space-y-1">
              <p>Qty</p>
              <div className="flex items-center select-none">
                <p className="border border-neutral-500 p-1 cursor-pointer" onClick={() => (qty > 0 ? setQty(qty - 1) : null)}>-</p>
                <p className="border border-neutral-500 p-1 ">{qty}</p>
                <p className="border border-neutral-500 p-1 cursor-pointer" onClick={() => setQty(qty + 1)}>+</p>
              </div>
            </div>

            {/* price and cart */}
            <div className="flex gap-3 items-center ">
              <p>${product.price}</p>
              <Button text={"add to cart"} className={"uppercase bg-yellow-600"}/>
            </div>

              {/* product details */}
            <div>
              <div>
                <p>Product details</p>
                <ul className="list-disc pl-5 space-y-1">
                  {product.productDetails.map((detail, index) => (
                    <li key={index} className="text-sm">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

            <div className="flex gap-4">
                <p>Category: {product.category}</p>
                <p>Tags:
                    {
                    product.tags.map((tag) => (
                        <span key={tag} className="text-blue-500">{tag}</span>
                    ))
                    }
                </p>
            </div>
        </section>

        {/* related products */}
        <section className="mx-4 space-y-2 mb-4">
          <p className="font-semibold uppercase ">related products</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.index} {...product} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
