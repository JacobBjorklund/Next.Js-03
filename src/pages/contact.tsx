import Article from '@/components/Article'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const contact = () => {
    return (
        <div>
            <Header />
            <Article hero="This is us!">
                <p>Contact Page</p>
            </Article>
            <Footer />
        </div>
    )
}

export default contact