import React from 'react'
import Navbar from './Components/Section1/Navbar'
import Hero from './Components/Section1/Navbar/Hero/Hero'
import Banner from './Components/Section2/Banner'
import Feature from './Components/Section4/Feature'
import Brand from './Components/section3/Brand'
import Service from './Components/Section5/Service'
import Team from './Components/Section6/Team'
import Footer from './Components/Section7/Footer'
import "./app.css"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Banner/>
      <Brand/>
      <Feature/>
      <Service/>
      <Team/> 
      <Footer/>
    </div>
  )
}

export default App