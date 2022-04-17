import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import PaymentPage from '../../components/checkoutMap/PaymentPage';
import { addPaymentMethod, selectAddress } from '../../redux/slices/userSlice';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const router = useRouter();
  const { redirect } = router.query;
  const address = useSelector(selectAddress);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!address) {
      router.push('/shipping');
    }
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      toast.error('You must select a payment method', {
        position: 'top-center',
      });
    } else {
      dispatch(addPaymentMethod(paymentMethod));
      toast.success(`You chose to pay with ${paymentMethod}`, {
        position: 'top-center',
      });
      router.push('/placeorder');
    }
  };
  return (
    <div className="w-screen h-[85vh] px-6 md:px-16 lg:px-32">
      <PaymentPage />
      <div className="flex items-center justify-center mt-8">
        <h1 className="text-5xl text-logo">Select Payment Method</h1>
      </div>

      <form onSubmit={submitForm} className="ml-[35rem] mt-6">
        {paymentMethod && (
          <span className="text-btn animate-pulse">{`You chose to pay with ${paymentMethod}`}</span>
        )}
        <div className="flex  mt-6 ">
          <input
            className="h-8 w-8"
            type="radio"
            checked={paymentMethod === 'paypal'}
            value="paypal"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label className="text-3xl font-bold text-cta ml-4">PayPal</label>
        </div>

        <div className="flex mt-6">
          <input
            className="h-8 w-8 "
            type="radio"
            checked={paymentMethod === 'stripe'}
            value="stripe"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label className="text-3xl font-bold text-cta ml-4">Stripe</label>
        </div>

        <div className="flex mt-6">
          <input
            className="h-8 w-8 "
            type="radio"
            checked={paymentMethod === 'cash'}
            value="cash"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label className="text-3xl font-bold text-cta ml-4">Cash</label>
        </div>

        <button
          type="submit"
          className="bg-btn mt-6 text-3xl font-bold text-white hover:bg-white hover:text-body w-60 h-12 rounded-md"
        >
          Continue
        </button>
      </form>
      <Link href="/shipping">
        <a className="text-md text-logo hover:text-btn mt-4">
          Back to shipping page
        </a>
      </Link>
    </div>
  );
};

export default Payment;
