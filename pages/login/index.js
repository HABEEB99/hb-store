import axios from 'axios';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addUser, selectUser } from '../../redux/slices/userSlice';

const Login = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { redirect } = router.query;
  const currentUser = useSelector(selectUser);
  useEffect(() => {
    if (currentUser) {
      router.push('/shipping');
    }
  }, []);

  const dispatch = useDispatch();

  const submitForm = async ({ email, password }) => {
    try {
      const { data } = await axios.post('/api/users/login', {
        email,
        password,
      });
      dispatch(addUser(data));
      Cookies.set('currentUser', data);
      router.push(redirect || '/products');
      toast.success(`Logged in successfully as ${data.name}`, {
        position: 'top-center',
      });
    } catch (err) {
      toast.error(`Invalid email or Password`, {
        position: 'top-center',
      });
    }
  };
  return (
    <div className="w-screen h-[87vh] px-6 md:px-16 lg:px-32 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-logo mt-8">Login</h1>

      <form onSubmit={handleSubmit(submitForm)} className="mt-8 w-[50rem]">
        {/* <div className="flex flex-col w-[50rem] mb-8 mt-4 relative">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            }}
            render={({ field }) => (
              <input
                {...field}
                error={Boolean(errors.email)}
                helperText={
                  errors.email
                    ? errors.email.type === 'pattern'
                      ? 'Invalid Email Address'
                      : 'Email is required'
                    : ''
                }
                className="peer placeholder-transparent w-full h-12 rounded-md text-2xl  
                border-2 border-body focus:border-btn "
                type="text"
                id="email"
                placeholder="email"
              />
            )}
          ></Controller>
          <label
            className="peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-2xl 
            absolute -top-8  left-0 text-xl text-logo transition-all font-bold
            peer-focus:-top-8 peer-focus:text-xl peer-focus:text-logo"
            htmlFor="email"
          >
            Email
          </label>
              </div>*/}
        <div className="flex flex-col w-[50rem] mb-8 mt-4 relative">
          <input
            className="peer placeholder-transparent w-full h-12 rounded-md text-2xl  
            border-2 border-body focus:border-btn "
            type="text"
            id="email"
            placeholder="Email"
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

        {/* <div className=" flex flex-col w-[50rem] mb-4 relative">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              minLength: 8,
            }}
            render={({ field }) => (
              <input
                {...field}
                error={Boolean(errors.password)}
                helperText={
                  errors.password
                    ? errors.password.type === 'minLength'
                      ? "Password length shouldn't be less than 8 characters"
                      : 'Password is required'
                    : ''
                }
                className="peer placeholder-transparent w-full h-12 rounded-md text-2xl  
                border-2 border-body focus:border-btn "
                type="password"
                id="password"
                placeholder="password"
              />
            )}
          ></Controller>
          <label
            className="peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-2xl 
            absolute -top-8  left-0 text-xl text-logo transition-all font-bold
            peer-focus:-top-8 peer-focus:text-xl peer-focus:text-logo"
            htmlFor="password"
          >
            Password
          </label>
              </div>*/}

        <div className=" flex flex-col w-[50rem] mb-4 relative">
          <input
            className="peer placeholder-transparent w-full h-12 rounded-md text-2xl  
            border-2 border-body focus:border-btn "
            type="password"
            placeholder="Password"
            id="password"
            {...register('password', {
              required: true,
              minLength: 4,
            })}
          />

          {errors.password && (
            <span className="text-red-600 text-md animate-pulse">
              {errors.password.type === 'required' && 'Password is required'}
              {errors.password.type === 'minLength' &&
                'Password must not be less than 8 characters'}
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
        <button className="mt-4 w-full h-12 hover:text-gray-500 hover:bg-white hover:border-2 hover:border-btn rounded-md mb-2 text-white bg-btn text-4xl text-center font-bold">
          Login
        </button>
      </form>

      <h4>
        Don't have an account yet?{' '}
        <Link href="/signup">
          <a className="ml-2 text-btn animate-pulse"> Signup </a>
        </Link>
      </h4>
    </div>
  );
};

export default Login;