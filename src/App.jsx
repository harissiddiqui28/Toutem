import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import HeroTwo from './components/HeroTwo'
import CardTwo from './components/CardsTwo'
import Banner from './components/Banner'
import Cardsthree from './components/CardsThree'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <Cards/>
     <HeroTwo/>
     <CardTwo/>
     <Banner/>
     <Cardsthree/>
     <Blogs/>
     <Footer/>
    </>
  )
}

export default App
