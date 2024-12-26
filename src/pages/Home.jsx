import React from 'react'
import Navbar from '../components/Navbar'
import Posts from '../components/Posts'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Posts />
            <Footer />
        </div>
    )
}

export default Home