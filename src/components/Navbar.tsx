import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex gap-4 text-xl font-bold'>
            <Link className='hover:underline' href="/">Home</Link>
            <Link className='hover:underline' href="/about">About</Link>
            <Link className='hover:underline' href="/contact">Contact</Link>
        </nav>
    )
}

export default Navbar