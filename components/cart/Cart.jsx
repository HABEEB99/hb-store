import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import Currency from 'react-currency-formatter';
import { selectProducts } from '../../redux/slices/cartSlice';

const Cart = () => {
  const cartItems = useSelector(selectProducts);

  return cartItems.length ? (
    <div className="absolute top-20 right-[1.65rem] md:right-16 lg:right-10 shadow-lg w-[25rem] h-[33.5rem] py-6 px-4 bg-body z-[999] ">
      <div className="h-[27rem]  overflow-y-scroll">
        {cartItems.map((item) => (
          <div className="flex items-center justify-between mb-3">
            <div className="w-24 h-24 relative rounded-lg">
              <Image
                className="rounded-lg"
                src={item.image}
                layout="fill"
                width="100%"
                height="100%"
                objectFit="cover"
                alt={item.name}
              />
            </div>

            <div className="flex items-start flex-col">
              <h2 className="text-gray-500">
                name:{' '}
                <span className="text-logo font-bold ml-2">{item.name}</span>
              </h2>
              <h2 className="text-gray-500">
                price:{' '}
                <span className="text-logo font-bold ml-3">
                  {' '}
                  {item.productQuantity} x <Currency quantity={item.price} />{' '}
                </span>
              </h2>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[100%]  static mt-4">
        <Link href="/checkout" passHref>
          <button className="h-12 hover:bg-white hover:text-logo w-[100%] bg-btn font-bold text-3xl text-white rounded-lg ">
            Go To Checkout
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="absolute flex flex-col items-center justify-center top-20 right-10 shadow-lg w-[25rem] h-[33.5rem] py-6 px-4 bg-body z-[999] ">
      <h2 className="text-logo text-3xl font-bold">
        There's no item in the cart
      </h2>
      <Link href="/products" passHref>
        <button
          className="w-[100%] h-12 bg-btn text-2xl font-bold text-white
         hover:bg-white hover:text-logo rounded-lg mt-3"
        >
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default Cart;
