import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import {
  AppStoreLogoIcon,
  BasketIcon,
  EnvelopeIcon,
  GooglePlayLogoIcon,
} from "@phosphor-icons/react";
import { useSelector } from "react-redux";
// import { removeFromCart } from "../Redux/actions";
import Cartcard from "../components/Cartcard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

  return (
    <div className="mt-16">
      <Navbar />
      <section className="bg-neutral-200">
        {/* cart and cart summary with checkout */}
        <div className="md:min-h-120 grid grid-cols-1 md:grid-cols-2 px-4 py-4  md:px-10 md:py-8 ">
          <div className="p-2 border ">
            <p>Cart({cart.length}) </p>
            <div className="grid grid-cols-1 gap-2">
              {cart.map((item) => (
                <div key={item.id}>
                  <Cartcard {...item} />
                  {/* <BasketIcon
                    className="cursor-pointer text-red-500 hover:text-red-700"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  /> */}
                </div>
              ))}
            </div>
          </div>

          <div className="p-2 border">
            <p>Order Summary</p>
          </div>
        </div>
      </section>

      {/* mini footer */}
      <section className="w-full text-white md:h-40 grid grid-cols-1 md:flex md:gap-50 p-4 space-y-8 md:px-20 bg-neutral-700">
        {/* right side, Logo and name */}
        <h1>
          <span className="text-2xl">s</span>hopaVerse
        </h1>

        {/* left side, 2 sections newsletter and download information */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-13 space-y-6 ">
          <div className="space-y-2 md:px-3">
            <p className="uppercase">new to shopaverse?</p>
            <p>
              Subcribe to our newsletter to get updates on our latest offers!
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white rounded-md p-2">
                <EnvelopeIcon size={23} className="text-zinc-600 " />
                <input
                  type="text"
                  placeholder="Enter E-mail Address"
                  className=" caret-gray-500 outline-0 text-black placeholder-gray-500"
                />
              </div>
              <Button text={"Subcribe"} className={"text-white rounded-md"} />
            </div>
          </div>

          {/* download information */}
          <div className="flex flex-col gap-4  md:px-3">
            <div className="flex gap-3">
              <div className="space-y-1 ">
                <p className="uppercase text-white ">
                  download shopaverse free app
                </p>
                <p>Get access to exclusive offers!</p>
              </div>
            </div>

            {/* download app section */}
            <div className="flex justify-between">
              <div className="flex items-center hover:text-red-600 cursor-pointer  gap-2">
                <AppStoreLogoIcon size={25} />
                <div>
                  <p className="text-sm ">Download on the</p>
                  <p className="text-base  ">App Store</p>
                </div>
              </div>

              <div className="flex items-center hover:text-red-600 cursor-pointer gap-2">
                <GooglePlayLogoIcon size={30} />
                <div className="">
                  <p className="text-sm ">Get it on</p>
                  <p className="text-base ">App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
