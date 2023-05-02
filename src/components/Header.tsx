import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className='h-[80px] justify-between flex items-center pl-6 pr-6 bg-gray-600 text-white'>
            <Logo />
            <Navbar />
        </header>
    )
}

export default Header