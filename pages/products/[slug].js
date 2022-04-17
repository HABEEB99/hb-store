import Link from 'next/link';
import React from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import Currency from 'react-currency-formatter';
import Product from '../../models/Products';
import db from '../../utilities/dbConnect';
import { addToCart } from '../../redux/slices/cartSlice';
import axios from 'axios';


const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();

  const addProductToCart = async () => {
    const { data } = await axios.get(`/api/products/${product._id}`);
    // const savedData = Cookies.set('products', JSON.stringify(data));
    dispatch(addToCart(data));
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center">
        <h1 className="text-4xl text-red-600">INVALID PRODUCT!</h1>
      </div>
    );
  }

  return (
    <div className="w-screen h-[152vh] md:h-[82vh] px-6 md:px-16 lg:px-32">
      <Link href="/products" passHref>
        <div className="flex items-center group cursor-pointer mt-4">
          <span className="group-hover:text-logo text-gray-500 text-3xl">
            Products
          </span>
          <BsFillArrowLeftSquareFill className="text-2xl text-btn group-hover:text-logo ml-1" />
        </div>
      </Link>

      <div className="mt-6 rounded-lg flex flex-col md:flex-row justify-between mb-8 lg:mb-0">
        <div className="w-[28rem] h-[30rem] md:w-[35rem] md:h-[31rem]  lg:h-[32rem] relative md:flex-1">
          <Image
            className="rounded-lg"
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </div>

        <div className="flex flex-col mt-4 md:mt-0 lg:flex-row lg:justify-between md:ml-12 lg:ml-0 md:flex-1 lg:flex-[1.4]">
          <div className="flex flex-col px-4 rounded-lg shadow-2xl h-[19rem] bg-logo items-start w-80 lg:ml-[5.2rem] ">
            <h2 className="text-gray-300 text-xl mt-2">
              Name :{' '}
              <span className="font-bold text-xl text-white">
                {product.name}
              </span>
            </h2>

            <h2 className="text-gray-300 text-xl mt-2">
              Category :{' '}
              <span className="font-bold text-xl text-white">
                {product.category}
              </span>
            </h2>

            <h2 className="text-gray-300 text-xl mt-2">
              Brand :{' '}
              <span className="font-bold text-xl text-white">
                {product.brand}
              </span>
            </h2>

            <h2 className="text-gray-300 text-xl mt-2">
              Rating :{' '}
              <span className="font-bold text-xl text-white">
                {product.rating}
              </span>
            </h2>

            <h2 className="text-gray-300 text-xl mt-2">
              Description :{' '}
              <span className="font-bold text-xl text-white">
                {product.description}
              </span>
            </h2>
          </div>

          <div className="mt-4 w-80 h-44 shadow-2xl rounded-lg bg-body px-4 md:mt-4 lg:mt-0">
            <h2 className="text-gray-500 text-xl mt-4">
              Price{' '}
              <span className="ml-[4.5rem] font-bold text-xl text-logo">
                <Currency quantity={product.price} />
              </span>
            </h2>

            <h2 className="text-gray-500 text-xl mt-4">
              Inventory{' '}
              <span className="ml-8 font-bold text-xl text-logo">
                {product.countInStock} in stock
              </span>
            </h2>

            <button
              onClick={addProductToCart}
              className="w-[100%] h-12 font-bold hover:bg-white hover:text-logo
              shadow-lg bg-btn mt-4 rounded-lg text-xl text-white"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { slug } = params;
  console.log(params);
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();

  return {
    props: {
      product: db.convertDocToPojo(product),
    },
  };
};
