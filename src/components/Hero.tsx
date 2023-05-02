import React, { ReactNode } from 'react'

type HeroProps = {
    children?: ReactNode
}

const Hero = ({ children }: HeroProps) => {
    return (
        <div className='h-[25vh] bg-gray-400 flex justify-center items-center p-6'>
            {children}
        </div>
    )
}

export default Hero