import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, selectUser } from '../../redux/slices/userSlice';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { redirect } = router.query;
  const currentUser = useSelector(selectUser);
  useEffect(() => {
    if (currentUser) {
      router.push('/products');
    }
  }, []);

  const dispatch = useDispatch();
 
  const submitForm = async ({ name, email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      toast.error(`Invalid email or Password`, {
        position: 'top-center',
      });
      return;
    }
    try {
      const { data } = await axios.post('/api/users/signup', {
        name,
        email,
        password,
      });
      dispatch(addUser(data));
      router.push(redirect || '/products');
      toast.success('SignUp was successful', {
        position: 'top-center',
      });
    } catch (err) {
      alert('wrong email or password');
    }
  };
  return (
    <div className="w-screen h-[87vh] px-6 md:px-16 lg:px-32 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-cta mt-8">Sign Up</h1>
      <form onSubmit={handleSubmit(submitForm)} className="mt-8 w-[50rem]">
        <div className="flex flex-col w-[50rem] mb-8 mt-4 relative">
          <input
            className="peer placeholder-transparent w-full h-12 rounded-md text-2xl  
            border-2 border-body focus:border-btn "
            type="text"
            id="name"
            placeholder="name"
            {...register('name', {
              required: true,
              minLength: 2,
            })}
          />
          {errors.name && (
            <span className="text-red-600 text-md animate-pulse">
              {errors.name.type === 'required' && 'Name is required'}
              {errors.name.type === 'minLength' &&
                'Name must not be less than 2 characters'}
            </span>
          )}
          <label
            className="peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-2xl 
            absolute -top-8  left-0 text-xl text-logo transition-all font-bold
            peer-focus:-top-8 peer-focus:text-xl peer-focus:text-logo"
            htmlFor="name"
          >
            Name
          </label>
        </div>

        <div className="flex flex-col w-[50rem] mb-8 relative">
          <input
            className="peer placeholder-transparent w-full h-12 rounded-md text-2xl  
            border-2 border-body focus:border-btn "
            type="text"
            id="email"
            placeholder="email"
            {...register('email', {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />

          {errors.email && (
            <span className="text-red-600 text-md animate-pulse">
              {errors.email.type === 'required' && 'Email is required'}
              {errors.email.type === 'pattern' && 'Invalid Email pattern'}
            </span>
          )}

          <label
            className="peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-2xl 
          absolute -top-8  left-0 text-xl text-logo transition-all font-bold
          peer-focus:-top-8 peer-focus:text-xl peer-focus:text-logo"
            htmlFor="email"
          >
            Email
          </label>
        </div>

        <div className=" flex flex-col mb-8 relative">
          <input
            className="peer placeholder-transparent w-full h-12 rounded-md text-2xl  
            border-2 border-body focus:border-btn "
            type="password"
            id="password"
            placeholder="password"
            {...register('password', {
              required: true,
              minLength: 4,
            })}
          />

          {errors.password && (
            <span className="text-red-600 text-md animate-pulse">
              {errors.password.type === 'required' && 'Password is required'}
              {errors.password.type === 'minLength' &&
                'Password must not be less than 4 characters'}
            </span>
          )}

          <label
            className="peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-2xl 
          absolute -top-8  left-0 text-xl text-logo transition-all font-bold
          peer-focus:-top-8 peer-focus:text-xl peer-focus:text-logo"
            htmlFor="password"
          >
            Password
          </label>
        </div>

        <div className=" flex flex-col mb-4 relative">
          <input
            className="peer placeholder-transparent w-full h-12 rounded-md text-2xl  
            border-2 border-body focus:border-btn "
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            {...register('confirmPassword', {
              required: true,
              minLength: 4,
            })}
          />

          {errors.confirmPassword && (
            <span className="text-red-600 text-md animate-pulse">
              {errors.confirmPassword.type === 'required' &&
                'Password is required'}
              {errors.confirmPassword.type === 'minLength' &&
                'Password must not be less than 4 characters'}
            </span>
          )}

          <label
            className="peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-2xl 
          absolute -top-8  left-0 text-xl text-logo transition-all font-bold
          peer-focus:-top-8 peer-focus:text-xl peer-focus:text-logo"
            htmlFor="password"
          >
            Confirm Password
          </label>
        </div>
        <button className="mt-4 w-full h-12 hover:text-gray-500 hover:bg-white hover:border-2 hover:border-btn rounded-md mb-2 text-white bg-btn text-4xl text-center font-bold">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
