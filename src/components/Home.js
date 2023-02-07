import React from 'react'
import Hero from './Hero'
import Pricing from './Pricing'
import Testimonial from './Testimonial'
import Faq from './Faq'
import Contact from './Contact'
import './HomeStyles.css'

const Home = () => {
  return (
    <div>
            <Hero />
            <Pricing/>
            <Testimonial/>
            <Faq/>
            <Contact/>

    </div>
  )
}

export default Home