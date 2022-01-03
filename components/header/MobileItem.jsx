import React from 'react'
import Link from 'next/link'

const MobileItem = ({title, Icon, path}) => {
    return (
        
            <Link href={path} passHref>
                <div className="flex mb-4 items-center group justify-center cursor-pointer hover:bg-btn w-[94%] rounded-md h-12">
                    <Icon className="hidden text-xl group-hover:block animate-bounce group-hover:text-white text-gray-100"/>
                    <h2 className="ml-1 text-2xl text-gray-500 group-hover:font-bold group-hover:text-gray-800">{title}</h2>
                </div>
            </Link>
        
    )
}

export default MobileItem
