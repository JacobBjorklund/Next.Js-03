import React, { ReactNode } from 'react'
import Hero from './Hero'

type ArticleProps = {
    children?: ReactNode,
    hero?: ReactNode
}

const Article = ({ children, hero }: ArticleProps) => {
    return (
        <article>
            <Hero>{hero}</Hero>
            <div className='my-6 mx-auto py-0 px-6 max-w-[800px] w-full '>
                {children}
            </div>
        </article>
    )
}

export default Article