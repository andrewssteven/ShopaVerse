import React, { useState } from "react";
import Button from "./Button";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import { ShoppingCartIcon } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/actions";

const ProductDetails = ({ products }) => {
  const [qty, setQty] = useState(0);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p className="text-center">Product not found</p>;
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 6);

  const slashPrice = product.price + 3000;

  return (
    <div className="md:mt-20 mt-12"> 
      <div className="space-y-2">
        <div className="w-full md:h-10 grid place-items-center bg-black/90 text-white z">
          <p className="text-center font-semibold uppercase">product details</p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 md:mx-20  md:gap-9">
          <div className="shadow-lg  grid place-items-center ">
            <img
              src={product.image}
              alt=""
              className="h-100 w-90 object-contain"
            />
          </div>

          {/* product details */}
          <div className="space-y-2">
            <p className="font-semibold text-xl ">{product.name}</p>
            <p className="text-sm text-neutral-500">Brand: {product.brand}</p>
            <p className="text-sm text-neutral-500">Stock: {product.stock}</p>
            <div></div>

            {/* color  */}
            <div className="flex flex-col space-y-1">
              <p>color</p>

              <div className="flex gap-2 select-none">
                {product.color.map((color) => (
                  <p className="border border-b-gray-500 py-0 px-2 ">{color}</p>
                ))}
              </div>
            </div>

            {/* sizes  */}
            {product.sizes && (
              <div className="flex text-sm  space-y-1 flex-col">
                <p>size</p>
                <div className="flex gap-2 select-none">
                  {product.sizes.map((size) => (
                    <p className="border border-b-gray-500 py-0 px-2 ">
                      {size}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Qty */}
            <div className="space-y-1">
              <p>Qty</p>
              <div className="flex items-center select-none">
                <p
                  className="border border-neutral-500 py-0 px-2  cursor-pointer"
                  onClick={() => (qty > 0 ? setQty(qty - 1) : null)}
                >
                  -
                </p>
                <p className="border border-neutral-500 py-0 px-2  ">{qty}</p>
                <p
                  className="border border-neutral-500 py-0 px-2  cursor-pointer"
                  onClick={() => setQty(qty + 1)}
                >
                  +
                </p>
              </div>
            </div>

            {/* price and cart */}
            <div className="flex gap-3 items-center ">
              <p>
                ${product.price}{" "}
                <span className="line-through text-xs text-neutral-500 ">
                  ${slashPrice}
                </span>
              </p>
              <Button
                text={"add to cart"}
                icons={<ShoppingCartIcon size={20} />}
                className={"text-sm uppercase bg-yellow-600"}
                onClick={() => {
                  let totalqty = qty
                  dispatch(addToCart({...product}));
                  cart.length + totalqty;
                  setQty(0);
                }}
              />
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

            <div className="space-y-1">
              <p>Category: {product.category}</p>
              <p className="">
                Tags:
                {product.tags.map((tag) => (
                  <span key={tag} className="pl-1  capitalize">
                    {tag},{" "}
                  </span>
                ))}
              </p>
            </div>
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
