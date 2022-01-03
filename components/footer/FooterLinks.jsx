import React from 'react'
import Link from 'next/link'
import { orderLinks } from './footerDb'

const FooterLinks = () => {
    return (
        <div>
            <h2 className="text-4xl italic mb-4">Extra Links</h2>
            {orderLinks.map(({id,name,path}) => (
                <div key={id} className="flex mt-1 group">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-logo group-hover:text-btn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>

                <div className="ml-2 transition duration-100 ease">
                        <Link href={path} >
                            <a className="text-gray-500 group-hover:text-logo">{name}</a>
                        </Link>
                </div>

                </div>
            ))}
        </div>
    )
}

export default FooterLinks
