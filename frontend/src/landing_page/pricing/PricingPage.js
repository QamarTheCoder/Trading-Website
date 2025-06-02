import React from 'react';
import Brokerage from './Brokerage';
import Hero from './Hero';
import Footer from '../Footer'
import Navbar from '../Navbar'

function PricingPage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <Brokerage/>
            <Footer/>
        </>
     );
}

export default PricingPage;