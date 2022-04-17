import Link from 'next/link';
import React from 'react';

const UserDetails = () => {
  return (
    <div className="flex flex-col justify-start  p-4 w-40 h-40 bg-body rounded-md shadow-2xl absolute top-20 right-[1.65rem] md:right-16 lg:right-40">
      <Link href="/">
        <a className="text-2xl text-logo mb-4 font-bold hover:text-btn">
          Profile
        </a>
      </Link>
      <Link href="/">
        <a className="text-2xl text-logo mb-4 hover:text-btn">My account</a>
      </Link>
      <Link href="/">
        <a className="text-2xl text-red-600 font-bold hover:text-red-800">
          Logout
        </a>
      </Link>
    </div>
  );
};

export default UserDetails;
