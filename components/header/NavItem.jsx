import Link from 'next/link'
import React from 'react'

const NavItem = ({title, Icon, path}) => {
    return (
        <Link href={path} passHref>
            <div className="flex items-center mr-4 group cursor-pointer">
                <Icon className="hidden group-hover:block animate-bounce text-logo"/>
                <h2 className="ml-1 text-gray-500 group-hover:font-bold group-hover:text-gray-800">{title}</h2>
            </div>
        </Link>
    )
}

export default NavItem
