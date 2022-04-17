import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import db from '../../utilities/dbConnect';
import Product from '../../models/Products';
import Currency from 'react-currency-formatter';
import { motion } from 'framer-motion';

const Products = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div className=" px-6 md:px-16 lg:px-32 w-screen h-[1437vh] md:h-[740vh] lg:h-[352vh]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-logo mb-6 mt-2 font-bold">
          Products
        </h1>
      </motion.div>

      <div className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-4">
        {products?.map((product) => (
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
            key={product._id}
            className="rounded-t-lg w-[28rem] md:w-[26.5rem] lg:w-[20rem] h-[25rem] border-[1px] border-logo shadow-xl"
          >
            <div>
              <Link href={`/products/${product.slug}`} passHref>
                <div className="relative w-[27.85rem] md:w-[26.38rem] lg:w-[19.85rem] h-[22rem]">
                  <Image
                    className="rounded-t-lg hover:opacity-[0.8]"
                    src={product.image}
                    width="100%"
                    height="100%"
                    layout="fill"
                    objectFit="cover"
                    alt={product.name}
                  />
                </div>
              </Link>
              <div className="px-2 flex justify-between items-center mt-1">
                <h2 className="text-logo text-xl font-bold">{product.name}</h2>
                <h2 className="text-lg text-btn">
                  {' '}
                  <Currency quantity={product.price} />{' '}
                </h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;

export const getServerSideProps = async (context) => {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();

  return {
    props: {
      products: products.map(db.convertDocToPojo),
    },
  };
};
