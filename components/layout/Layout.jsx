import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Footer2 from '../footer2/Footer2'

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
            <Footer2/>
        </div>
    )
}

export default Layout
