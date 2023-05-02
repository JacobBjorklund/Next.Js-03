import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Article from '@/components/Article'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
      <Article hero="Index Page!">
        <h1>Hello World!</h1>
        <p>Detta är index sidan!</p>
      </Article>
      <Footer />
    </div>
  )
}
