import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const LatestProducts = ({ name, imageUrl }) => {
  return (
    <motion.div
      whileHover={{
        scale: [1, 1.4, 1.2],
        rotate: [0, 10, -10, 0],
        filter: [
          'hue-rotate(0) contrast(100%)',
          'hue-rotate(360deg) contrast(200%)',
          'hue-rotate(45deg) contrast(300%)',
          'hue-rotate(0) contrast(100%)',
        ],
        transition: {
          duration: 0.2,
        },
        position: 'relative',
        zIndex: 1,
        background: 'white',
      }}
      className="relative w-[26rem] h-[26rem] md:w-[27rem]  lg:w-[20rem] lg:h-[24rem] bg-body rounded-lg"
    >
      <Image
        className="rounded-lg"
        width="100%"
        height="100%"
        layout="fill"
        objectFit="cover"
        src={imageUrl}
        alt={name}
      />

      <div className="absolute top-0 left-0 flex items-center justify-center w-[100%]">
        <h3 className=" text-body text-xl font-bold">{name}</h3>
      </div>

      <div className="absolute flex items-center justify-center top-[21rem] lg:top-[18rem] left-0 w-[100%]">
        <Link href="/products" passHref>
          <button className="w-72 lg:w-60 h-12 rounded-md hover:bg-white hover:text-gray-500 bg-btn text-body font-bold text-2xl ">
            Shop Now
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default LatestProducts;
