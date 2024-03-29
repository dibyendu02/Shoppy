
import React, { useEffect } from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Footer from '../components/Footer'



const Home = () => {
  useEffect(() => {
    window. scrollTo(0, 0);
  },[])
  return (
    <div>
        <div style={{position: "fixed", zIndex: "1"}}><Announcement/></div>
        <div>
          <Navbar/>
          <Slider/>
          <Categories/>
          <Products/>
          <NewsLetter/>
          <Footer/>
        </div>
        
    </div>
  )
}

export default Home