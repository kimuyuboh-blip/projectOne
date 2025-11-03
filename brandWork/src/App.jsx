import './App.css'
import Header from './components/layout/Header.jsx'
import Hero from './components/sections/Hero.jsx'
import Feature from './components/sections/Feature.jsx' 
import Section1 from './components/sections/Section1.jsx'
import Section2 from './components/sections/Section2.jsx'
import AllProducts from './components/sections/allProducts.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import CTA from './components/sections/CTA.jsx'
import Footer from './components/layout/Footer.jsx'



function App() {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <Section1 />
      <Section2 />
      <AllProducts />
      <Testimonials />
      <CTA />
      <Footer />
  </>
  )
};

export default App

