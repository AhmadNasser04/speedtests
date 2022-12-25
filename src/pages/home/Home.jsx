import React from 'react'
import Footer from '../../components/Footer'
import Hero from './Hero'
import Tests from './Tests'

function Home() {
  return (
    <div className='space-y-28 bg-[#F6F6F6] scroll-smooth overflow-hidden'>
        {/* Hero Section */}
        <section>
          <Hero />
        </section>

        {/* Tests */}
        <section id='tests' className='snap-center'>
          <Tests />
        </section>

        {/* Footer */}
        <section>
          <Footer />
        </section>
    </div>
  )
}

export default Home