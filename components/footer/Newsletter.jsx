import React, { useState, useEffect } from 'react';

const Newsletter = () => {
  const [subscribe, setSubscribe] = useState(false);

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue((value) => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (subscribe) {
      setTimeout(() => {
        setSubscribe(false);
      }, 10000);
    }
  }, [subscribe]);

  //   const sendEmail = (e) => {
  //     e.preventDefault();
  //     emailjs
  //       .send(
  //         'service_hxyir1g',
  //         'template_7d8n2fj',
  //         value,
  //         'user_DdmrQ6ZEsmIcoqdpKaGIL'
  //       )
  //       .then(
  //         (response) => {
  //           console.log('Succesfully subscribed', response);
  //           setValue('');
  //           setSubscribe(true);
  //         },
  //         (error) => {
  //           console.log('Subscription Failed', error);
  //         }
  //       );
  //   };

  return (
    <div className=" mb-[3.5rem]">
      <h2 className="text-4xl italic mb-4 ">Newsletter</h2>

      <form>
        <div className="relative flex flex-col mt-4">
          <input
            className="peer border-2 placeholder-transparent
            border-btn w-48 md:w-60 h-10"
            value={value}
            onChange={handleChange}
            name="email"
            id="email"
            type="email"
            placeholder=" Input your email"
            required
          />
          <label className="absolute " htmlFor="email">
            Email
          </label>
        </div>
        <button className=" hover:bg-white font-bold hover:text-gray-500 transition duration-300 ease-in-out rounded-lg block bg-btn mt-2 h-10 w-48 md:w-60 text-2xl text-white">
          Subscibe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
