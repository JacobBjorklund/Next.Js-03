import React from 'react'

const footerHeight = 200

const Footer = () => {
    return (
        <>
            <div style={{ height: footerHeight }} />
            <footer style={{ height: footerHeight }} className='flex justify-center p-8 bg-gray-600 text-white absolute bottom-0 w-full'>
                Copyright &copy; {new Date().getFullYear()} Jacob
            </footer>
        </>
    )
}

export default Footer