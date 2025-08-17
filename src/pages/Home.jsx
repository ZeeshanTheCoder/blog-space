import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import LatestPosts from '../components/LatestPosts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        
      <Navbar />
      <HeroSection />
      <LatestPosts />
      <Footer />

    </>
  )
}

export default Home