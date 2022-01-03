import React from 'react'
import {AiFillHome, AiFillInfoCircle} from 'react-icons/ai'
import { MdContactPhone } from 'react-icons/md'
import {FaTimes,FaLocationArrow, FaProductHunt, FaBlog} from 'react-icons/fa'
import MobileItem from './MobileItem'

const MobileNav = ({handleClick}) => {
    return (
        <div className="h-[34rem] z-[999] w-96 p-4 bg-body absolute top-20 right-6 flex flex-col lg:hidden">
            <div className="flex justify-end mb-6">
              <FaTimes onClick={handleClick} className="text-4xl text-cta hover:text-red-600"/>
            </div>

            <nav className="flex flex-col items-center">
                <MobileItem title="Home" path="/" Icon={AiFillHome}/>
                <MobileItem title="About" path="/about" Icon={AiFillInfoCircle}/>
                <MobileItem title="Products" path="/products" Icon={FaProductHunt}/>
                <MobileItem title="Blog" path="/blog" Icon={FaBlog}/>
                <MobileItem title="Contacts" path="/contacts" Icon={MdContactPhone}/>
                <button className=" lg:hidden mt-4  text-white text-2xl font-bold  h-12 w-[94%] bg-btn rounded-md hover:bg-body hover:text-gray-500 hover:border-4 hover:border-btn transition duration-400 ease-out"> Login </button>
                <button className=" lg:hidden mt-4 text-gray-500 text-2xl font-bold h-12 w-[94%] border-2 border-btn rounded-md hover:bg-btn hover:text-white hover:border-4 hover:border-btn transition duration-400 ease-out">Sign up</button>
            </nav>
        </div>
    )
}

export default MobileNav


