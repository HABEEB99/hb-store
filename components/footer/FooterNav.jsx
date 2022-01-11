import React from 'react';
import Link from 'next/link';
import NavItem from './NavItem';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import { FaBlog, FaProductHunt } from 'react-icons/fa';
import { MdContactPhone } from 'react-icons/md';

const FooterNav = () => {
  return (
    <div className="flex flex-col justify-start">
      <h2 className="text-4xl  mb-4">Navigations</h2>

      <div className="flex flex-col">
        <NavItem name="Home" path="/" Icon={AiFillHome} />
        <NavItem name="About" path="/about" Icon={AiFillInfoCircle} />
        <NavItem name="Products" path="/products" Icon={FaProductHunt} />
        <NavItem name="Blog" path="/blog" Icon={FaBlog} />
        <NavItem name="Contacts" path="/contacts" Icon={MdContactPhone} />
      </div>
    </div>
  );
};

export default FooterNav;
