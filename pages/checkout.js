import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';
import {
  addToCart,
  decreaseProductQuantity,
  removeAllProducts,
  removeFromCart,
  selectProducts,
} from '../redux/slices/cartSlice';
import Currency from 'react-currency-formatter';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { selectUser } from '../redux/slices/userSlice';

const Checkout = () => {
  const router = useRouter();
  const checkOutItems = useSelector(selectProducts);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const increaseQuantity = (product) => {
    dispatch(addToCart(product));
  };
  const deleteProduct = (product) => {
    dispatch(removeFromCart(product));
  };
  const decreaseQuantity = (product) => {
    dispatch(decreaseProductQuantity(product));
  };

  const clearCart = () => {
    dispatch(removeAllProducts());
  };
  if (!currentUser) {
    router.push('/login');
  }
  return (
    <div className=" w-screen h-[125vh] lg:h-[85vh]  px-6 md:px-16 lg:px-32">
      <h1 className="text-5xl mt-6 font-bold text-cta">Shopping Cart</h1>

      <div className="w-[100%] flex flex-col lg:flex-row mt-10">
        {/* CART ITEMS */}
        <div className="w-[28rem] md:w-[55.7rem] lg:w-[58rem] h-[30rem] bg-body flex flex-col">
          {/* CART ITEMS HEADER*/}
          <div className="flex items-center justify-between w-[100%] h-16 border-logo border-b-2">
            {/* HEADER ITEMs */}
            <div className="h-[100%] flex-[4] flex items-center">
              <h2 className="text-logo text-lg md:text-3xl">
                PRODUCT
              </h2>
            </div>

            <div className="h-[100%] flex-[2] flex items-center">
              <h2 className="text-logo text-lg md:text-3xl">
                QUANTITY
              </h2>
            </div>

            <div className="h-[100%] flex-[1] flex items-center justify-end ">
              <h2 className="text-logo text-lg md:text-3xl">TOTAL</h2>
            </div>
          </div>

          {/* CHECKOUT ITEMS */}
          <div className="overflow-y-scroll h-[90%] w-[100%]">
            {checkOutItems?.map((item) => (
              <div className=" flex items-center justify-between w-[100%] h-[12rem] md:h-[13rem] border-logo border-b-2">
                {/* PRODUCT */}
                <div className="h-[100%] flex-[6] flex items-center">
                  <div className="flex items-center">
                    {/* IMAGE */}
                    <div className="w-[10rem]   md:mt-0 h-[11rem] md:w-[12rem] md:h-[11rem] relative rounded-lg">
                      <Image
                        className="rounded-lg"
                        src={item.image}
                        alt={item.name}
                        width="100%"
                        height="100%"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    {/* DETAILS */}
                    <div className="ml-1 md:ml-4">
                      <h2 className="text-gray-600">
                        Name:{' '}
                        <span className="text-gray-700 ml-1 text-sm md:text-xl font-bold">
                          {item.name}
                        </span>{' '}
                      </h2>
                      <h2 className="text-gray-600 mt-2">
                        Brand:{' '}
                        <span className="text-gray-700 ml-1 text-sm md:text-xl font-bold">
                          {item.brand}
                        </span>{' '}
                      </h2>
                      <h2 className="text-gray-600 mt-2">
                        Price:{' '}
                        <span className="text-cta ml-[0.65rem] text-sm md:text-xl font-bold">
                          <Currency quantity={item.price} />
                        </span>{' '}
                      </h2>
                      <MdRemoveShoppingCart
                        onClick={() => deleteProduct(item)}
                        className="text-2xl md:text-5xl md:mt-2 cursor-pointer text-red-600 hover:text-red-700"
                      />
                    </div>
                  </div>
                </div>

                {/* QUANTITY */}
                <div className="h-[100%] flex-[2.5] ml-[2.4rem] md:ml-0 md:mr-2 flex items-center">
                  <div className="px-2 h-8 w-20 md:w-32 md:h-12 border-2 border-gray-600 rounded-lg flex items-center justify-between">
                    <AiFillMinusCircle
                      onClick={() => decreaseQuantity(item)}
                      className="text-gray-600 cursor-pointer text-xl md:text-3xl hover:text-red-600"
                    />
                    <span>{item.productQuantity}</span>
                    <AiFillPlusCircle
                      onClick={() => increaseQuantity(item)}
                      className="text-gray-600 cursor-pointer text-xl md:text-3xl hover:text-green-600"
                    />
                  </div>
                </div>

                {/* TOTAL */}
                <div className="h-[100%] ml-4 md:ml-0 flex-[1.5] flex items-center justify-end">
                  <span className="text-gray-600 text-sm md:text-xl font-bold">
                    {' '}
                    <Currency
                      quantity={item.price * item.productQuantity}
                    />{' '}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="shadow-xl rounded-md w-[28rem] md:w-[33rem] mt-[1.2rem] lg:mt-0 lg:w-[24.8rem] h-[13rem] bg-logo ml-0 lg:ml-4 px-4 lg:px-2 py-4">
          <div className="flex items-center justify-between w-[100%] h-8">
            <h2 className="text-body text-3xl">Subtotal</h2>
            <BsArrowRight className="text-body text-2xl" />
            <span className="text-white font-bold text-3xl">
              <Currency
                quantity={products.reduce(
                  (acc, product) =>
                    acc + product.productQuantity * product.price,
                  0
                )}
              />
            </span>
          </div>

          <span className="text-[0.9rem] text-gray-400 mt-4">
            Taxes and shipping calculated at checkout
          </span>

          <Link href="/shipping" passHref>
            <button className="w-[100%] mt-4 h-12 text-2xl font-bold bg-btn text-white hover:bg-white hover:text-logo rounded-lg">
              check out
            </button>
          </Link>
          <Link href="/products" passHref>
            <div className="flex items-center mt-4 cursor-pointer group">
              <BsArrowLeft className="text-gray-400 text-2xl group-hover:text-btn" />
              <span className="text-gray-400 ml-2 text-xl group-hover:text-btn">
                Continue shopping
              </span>
            </div>
          </Link>
        </div>
      </div>

      <button
        onClick={clearCart}
        className="h-12 rounded-lg mt-4 w-[28rem] md:w-[33rem] lg:w-60 
        bg-btn text-2xl font-bold text-white hover:bg-white 
        hover:text-logo"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Checkout;
