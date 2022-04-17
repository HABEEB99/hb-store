import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const OrderPage = () => {
  return (
    <div className="flex items-center justify-between mt-1 p-8 h-28 w-[82vw] shadow-xl rounded-md">
      <div className="flex flex-col items-center">
        <IoMdCheckmarkCircle className="text-4xl text-btn" />
        <h2 className="text-2xl font-bold text-logo">Login</h2>
      </div>
      <BsArrowRight className="text-6xl text-btn" />
      <div className="flex flex-col items-center">
        <IoMdCheckmarkCircle className="text-4xl text-btn" />
        <h2 className="text-2xl font-bold text-logo">Shipping Address</h2>
      </div>
      <BsArrowRight className="text-6xl text-btn" />
      <div className="flex flex-col items-center">
        <IoMdCheckmarkCircle className="text-4xl text-btn" />
        <h2 className="text-2xl font-bold text-logo ">Payment Method</h2>
      </div>
      <BsArrowRight className="text-6xl text-btn" />
      <div className="flex flex-col items-center">
        <div className="rounded-[50%] bg-btn w-8 h-8 animate-pulse flex items-center justify-center">
          <h2 className="text-white text-2xl font-bold">4</h2>
        </div>
        <h2 className="text-2xl font-bold text-logo">Place Order</h2>
      </div>
    </div>
  );
};

export default OrderPage;
