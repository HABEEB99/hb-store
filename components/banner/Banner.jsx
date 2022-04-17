import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const Banner = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto rounded-2xl ">
      {/* BANNER IMAGES */}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
        className="rounded-lg object-cover"
      >
        <div className="w-[100%] h-[85vh] rounded-2xl">
          <img
            className="object-contain w-[100%] "
            loading="lazy"
            src="/bg-1.jpg"
            alt="banner1"
          />
        </div>

        <div className="w-[100%] h-[85vh] rounded-2xl">
          <img
            className="object-contain w-[100%] "
            loading="lazy"
            src="/bg-4.jpg"
            alt="banner1"
          />
        </div>

        <div className="w-[100%] h-[85vh] rounded-2xl">
          <img
            className="object-contain w-[100%] "
            loading="lazy"
            src="/bg-5.jpg"
            alt="banner1"
          />
        </div>
      </Carousel>

      {/* BANNER IMAGES */}
      <div className="absolute top-64 w-[100%] flex flex-col items-center justify-center ">
        <h1 className="text-gray-200 font-bold text-2xl md:text-5xl lg:text-6xl">
          {' '}
          Get Quality Items At An Affordable Prices
        </h1>
        <Link href="/products" passHref>
          <button className="mt-4 bg-btn text-4xl md:text-5xl lg:text-6xl transition duration-400 ease-in-out hover:bg-white hover:text-gray-600 text-white inline-block text-center w-80 md:w-96 lg:w-[27rem] h-20 rounded-xl font-bold ">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
