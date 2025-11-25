import './App.css'
import { Suspense, lazy } from 'react'
import Header from './components/layout/Header.jsx'
import Hero from './components/sections/Hero.jsx'
import Feature from './components/sections/Feature.jsx' 

// Lazy load below-the-fold components
const Section1 = lazy(() => import('./components/sections/Section1.jsx'))
const Section2 = lazy(() => import('./components/sections/Section2.jsx'))
const AllProducts = lazy(() => import('./components/sections/allProducts.jsx'))
const Testimonials = lazy(() => import('./components/sections/Testimonials.jsx'))
const CTA = lazy(() => import('./components/sections/CTA.jsx'))
const Server = lazy(() => import('./components/sections/server.jsx'))
const Footer = lazy(() => import('./components/layout/Footer.jsx'))

// Fallback component for loading states
const LoadingFallback = () => null

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <Suspense fallback={<LoadingFallback />}>
        <Section1 />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Section2 />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <AllProducts />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <CTA />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Server />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
  </>
  )
};

export default App

