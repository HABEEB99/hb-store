import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineLoading3Quarters,
} from 'react-icons/ai';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';
import {
  addToCart,
  decreaseProductQuantity,
  removeAllProducts,
  removeFromCart,
  selectProducts,
} from '../../redux/slices/cartSlice';
import Currency from 'react-currency-formatter';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import {
  selectAddress,
  selectPayment,
  selectUser,
} from '../../redux/slices/userSlice';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { selectUser } from '../redux/slices/userSlice';
// import { selectProducts } from '../../redux/slices/cartSlice';

const ProductsInCart = () => {
  const router = useRouter();
  const checkOutItems = useSelector(selectProducts);
  const userAddress = useSelector(selectAddress);
  const paymentType = useSelector(selectPayment);
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

  const itemsSum = products.reduce(
    (acc, product) => acc + product.productQuantity * product.price,
    0
  );

  const tax = itemsSum * 0.05;

  const shippingCost = itemsSum * 0.07;

  const totalSum = itemsSum + tax + shippingCost;

  const [loading, setLoading] = useState(false);
  const placeOrder = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        '/api/orders',
        {
          orderItems: checkOutItems,
          userAddress,
          paymentType,
          itemsSum,
          tax,
          shippingCost,
          totalSum,
        },
        {
          headers: {
            authorization: `Bearer ${currentUser.token}`,
          },
        }
      );
      setLoading(false);
      router.push(`/order/${data._id}`);
    } catch (error) {
      setLoading(false);
      toast.error('Error', {
        position: 'top-center',
      });
    }
  };
  return (
    <div className="">
      <h1 className="text-5xl mt-6 font-bold text-cta">Place Your Order</h1>

      <div className="w-[100%] flex flex-col lg:flex-row mt-10">
        <div>
          {/* Shipping Address*/}
          <div className="w-[28rem] md:w-[55.7rem] lg:w-[58rem] h-[5rem] mb-8 bg-body  rounded-lg flex flex-col">
            <h2 className="text-3xl text-logo font-bold">Shipping Address</h2>
            <p className="mt-4">{userAddress.address}</p>
          </div>
          {/* Payment Method*/}
          <div className="w-[28rem] md:w-[55.7rem] lg:w-[58rem] h-[5rem] mb-8 bg-body rounded-lg flex flex-col">
            <h2 className="text-3xl text-logo font-bold">Payment Method</h2>
            <p className="mt-4">{paymentType}</p>
          </div>
          {/* CART ITEMS */}
          <div className="w-[28rem] md:w-[55.7rem] lg:w-[58rem] h-[32rem] bg-body shadow-2xl rounded-lg flex flex-col">
            <h2 className="text-3xl text-logo font-bold">Order Items</h2>
            {/* CART ITEMS HEADER*/}
            <div className="flex items-center justify-between w-[100%] h-16 border-logo border-b-2">
              {/* HEADER ITEMs */}
              <div className="h-[100%] flex-[4] flex items-center">
                <h2 className="text-logo text-lg md:text-3xl">PRODUCT</h2>
              </div>

              <div className="h-[100%] flex-[2] flex items-center">
                <h2 className="text-logo text-lg md:text-3xl">QUANTITY</h2>
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
        </div>

        <div className="shadow-xl rounded-md w-[28rem] md:w-[33rem] mt-[1.2rem] lg:mt-0 lg:w-[24.8rem] h-[22rem] bg-logo ml-0 lg:ml-4 px-4 lg:px-2 py-4">
          <div className="flex items-center justify-between w-[100%] h-8 mb-6">
            <h2 className="text-body text-3xl ">Items</h2>
            <BsArrowRight className="text-body text-2xl" />
            <span className="text-white text-3xl">
              <Currency quantity={itemsSum} />
            </span>
          </div>

          <div className="flex items-center justify-between w-[100%] h-8 mb-6">
            <h2 className="text-body text-3xl">Tax</h2>
            <BsArrowRight className="text-body text-2xl" />
            <span className="text-white  text-3xl">
              <Currency quantity={tax} />
            </span>
          </div>

          <div className="flex items-center justify-between w-[100%] h-8 mb-6">
            <h2 className="text-body text-3xl">Shipping</h2>
            <BsArrowRight className="text-body text-2xl" />
            <span className="text-white text-3xl">
              <Currency quantity={shippingCost} />
            </span>
          </div>

          <div className="flex border-4  border-cta items-center justify-between w-[100%] h-12 mb-6">
            <h2 className="text-body text-3xl font-bold ">Total</h2>
            <BsArrowRight className="text-body text-2xl" />
            <span className="text-white font-bold text-4xl">
              <Currency quantity={totalSum} />
            </span>
          </div>

          <Link href="/shipping" passHref>
            <button
              onClick={placeOrder}
              className="w-[100%] mt-4 h-12 text-2xl font-bold bg-btn text-white hover:bg-white hover:text-logo rounded-lg"
            >
              Place Order
            </button>
          </Link>

          {loading && (
            <span>
              <AiOutlineLoading3Quarters className="text-btn" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsInCart;
