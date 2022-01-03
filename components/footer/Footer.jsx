import React from 'react'
import FooterLinks from './FooterLinks'
import FooterNav from './FooterNav'
import FooterSocials from './FooterSocials'
import Newsletter from './Newsletter'

const Footer = () => {
    return (
        <div className="w-screen bg-body px-6 md:px-12 lg:px-32 pt-12 pb-12 grid gap-6 grid-cols-2 md:flex md:flex-row items-center justify-center md:justify-between">
            <FooterNav/>
            <FooterLinks/>
            <FooterSocials/>
            <Newsletter/>
        </div>
    )
}

export default Footer

