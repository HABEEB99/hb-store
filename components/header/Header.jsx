import Link from 'next/link'
import React,{useState} from 'react'
import {MdShoppingCart} from 'react-icons/md'
import {AiFillHome, AiFillInfoCircle} from 'react-icons/ai'
import { MdContactPhone } from 'react-icons/md'
import {FaBars, FaBlog, FaKey, FaLocationArrow, FaProductHunt, FaShoppingCart} from 'react-icons/fa'
import NavItem from './NavItem'
import MobileNav from './MobileNav'

const Header = () => {

    const [openMobileNav, setOpenMobileNav] = useState(false);

    const handleClick = () => {
      setOpenMobileNav(!openMobileNav)
    }

    return (
        <div className="relative w-screen h-16 bg-body px-6 md:px-16  lg:px-32 flex items-center justify-between">

            {/* BRAND */}
            <Link href="/" passHref>
              <div className="flex items-center">
               <MdShoppingCart className="text-2xl text-logo"/>
               <h2 className="font-bold text-2xl text-logo ml-1">HB-STORE</h2>
              </div>
            </Link>

            {/* NAV */}
            <nav className="lg:flex items-center hidden lg:block">
              <NavItem title="Home" path="/" Icon={AiFillHome}/>
              <NavItem title="About" path="/about" Icon={AiFillInfoCircle}/>
              <NavItem title="Products" path="/products" Icon={FaProductHunt}/>
              <NavItem title="Blog" path="/blog" Icon={FaBlog}/>
              <NavItem title="Contacts" path="/contacts" Icon={MdContactPhone}/>
            </nav>

            {/* CTA */}
            <div className="flex items-center">
            
              <button className="hidden lg:block mr-4 text-white text-xl font-bold w-24 h-10 bg-btn rounded-md hover:bg-body hover:text-gray-500 hover:border-4 hover:border-btn transition duration-400 ease-out"> Login </button>

              <button className="hidden lg:block mr-4 text-gray-500 text-xl font-bold w-24 h-10 border-2 border-btn rounded-md hover:bg-btn hover:text-white hover:border-4 hover:border-btn transition duration-400 ease-out">Sign up</button>

              <div className="relative group">
                <FaShoppingCart className="text-4xl text-cta group-hover:text-logo"/>
                <span className="bg-btn group-hover:bg-cta group-hover:text-btn w-4 h-4 rounded-[50%] text-xs text-cta text-center absolute -top-[0.6rem] font-bold right-1">10</span>
              </div>
 
            </div>

            <FaBars onClick={handleClick} className="text-4xl text-cta lg:hidden"/>
            
            {openMobileNav && <MobileNav handleClick={handleClick}/>}
        </div>
    )
}

export default Header
