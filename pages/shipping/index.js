import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ShippingPage from '../../components/checkoutMap/ShippingPage';
import { addShippingAddress, selectUser } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

const Shipping = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();
  const router = useRouter();
  const { redirect } = router.query;
  const currentUser = useSelector(selectUser);
  useEffect(() => {
    if (!currentUser) {
      router.push('/login?redirect=/shipping');
    }
  }, []);

  const submitForm = ({ fullName, address, city, postalCode, country }) => {
    dispatch(
      addShippingAddress({ fullName, address, city, postalCode, country })
    );
    router.push('/payment');
  };
  return (
    <div className="w-screen h-[106vh] px-6 md:px-16 lg:px-32">
      <ShippingPage />
      <h1 className="text-center text-3xl text-cta font-bold mt-1 mb-4">
        Shipping Address
      </h1>

      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-col w-[50rem] mb-8 mt-4 relative">
          <input
            className="peer placeholder-transparent w-full h-12 rounded-md text-2xl  
            border-2 border-body focus:border-btn "
            type="text"
            placeholder="fullName"
            id="fullName"
            {...register('fullName', {
              required: true,
              minLength: 5,
            })}
          />

          {errors.fullName && (
            <span className="text-red-600 text-md animate-pulse">
              {errors.fullName.type === 'required' && 'FullName is required'}
              {errors.fullName.type === 'minLength' &&
                'FullName must not be less than 5 characters'}
            </span>
          )}

          <label
            className="peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-2xl 
          absolute -top-8  left-0 text-xl text-logo transition-all font-bold
          peer-focus:-top-8 peer-focus:text-xl peer-focus:text-logo"
            htmlFor="fullName"
          >
            FullName
          </label>
        </div>

        <div className="flex flex-col w-[50rem] mb-8 mt-4 relative">
          <input
            className="peer placeholder-transparent w-full h-12 rounded-md text-2xl  
            border-2 border-body focus:border-btn "
            type="text"
            placeholder="address"
            id="address"
            {...register('address', {
              required: true,
              minLength: 5,
            })}
          />

          {errors.address && (
            <span className="text-red-600 text-md animate-pulse">
              {errors.address.type === 'required' && 'Address is required'}
              {errors.address.type === 'minLength' &&
                'Address must not be less than 5 characters'}
            </span>
          )}

          <label
            className="peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-2xl 
            absolute -top-8  left-0 text-xl text-logo transition-all font-bold
            peer-focus:-top-8 peer-focus:text-xl peer-focus:text-logo"
            htmlFor="address"
          >
            Address
          </label>
        </div>

        <div className="flex flex-col w-[50rem] mb-8 mt-4 relative">
          <input
            className="peer placeholder-transparent w-full h-12 rounded-md text-2xl  
            border-2 border-body focus:border-btn "
            type="text"
            placeholder="city"
            id="city"
            {...register('city', {
              required: true,
              minLength: 2,
            })}
          />

          {errors.city && (
            <span className="text-red-600 text-md animate-pulse">
              {errors.city.type === 'required' && 'City is required'}
              {errors.city.type === 'minLength' &&
                'City must not be less than 2 characters'}
            </span>
          )}

          <label
            className="peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-2xl 
            absolute -top-8  left-0 text-xl text-logo transition-all font-bold
            peer-focus:-top-8 peer-focus:text-xl peer-focus:text-logo"
            htmlFor="address"
          >
            City
          </label>
        </div>

        <div className="flex flex-col w-[50rem] mb-8 mt-4 relative">
          <input
            className="peer placeholder-transparent w-full h-12 rounded-md text-2xl  
            border-2 border-body focus:border-btn "
            type="text"
            placeholder="postal code"
            id="postalCode"
            {...register('postalCode', {
              required: true,
              minLength: 6,
            })}
          />

          {errors.postalCode && (
            <span className="text-red-600 text-md animate-pulse">
              {errors.postalCode.type === 'required' &&
                'PostalCode is required'}
              {errors.postalCode.type === 'minLength' &&
                'PostalCode must not be less than 6 characters'}
            </span>
          )}

          <label
            className="peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-2xl 
            absolute -top-8  left-0 text-xl text-logo transition-all font-bold
            peer-focus:-top-8 peer-focus:text-xl peer-focus:text-logo"
            htmlFor="address"
          >
            Postal Code
          </label>
        </div>

        <div className="flex flex-col w-[50rem] mb-8 mt-4 relative">
          <input
            className="peer placeholder-transparent w-full h-12 rounded-md text-2xl  
            border-2 border-body focus:border-btn "
            type="text"
            placeholder="Country"
            id="country"
            {...register('country', {
              required: true,
              minLength: 3,
            })}
          />

          {errors.country && (
            <span className="text-red-600 text-md animate-pulse">
              {errors.country.type === 'required' && 'Country is required'}
              {errors.country.type === 'minLength' &&
                'Country must not be less than 3 characters'}
            </span>
          )}

          <label
            className="peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-2xl 
            absolute -top-8  left-0 text-xl text-logo transition-all font-bold
            peer-focus:-top-8 peer-focus:text-xl peer-focus:text-logo"
            htmlFor="address"
          >
            Country
          </label>
        </div>

        <button className="mt-1 mb-6 w-[50rem] h-12 hover:text-gray-500 hover:bg-white hover:border-2 hover:border-btn rounded-md  text-white bg-btn text-4xl text-center font-bold">
          Continue
        </button>
      </form>
    </div>
  );
};

export default Shipping;
