import Article from '@/components/Article'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const about = () => {
    return (

        <div>
            <Header />
            <Article hero="This is us!">
                <p>About Page</p>
            </Article>
            <Footer />
        </div>
    )
}

export default about