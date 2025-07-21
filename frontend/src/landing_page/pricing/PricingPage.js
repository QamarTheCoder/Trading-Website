import React from 'react';
import Brokerage from './Brokerage';
import Hero from './Hero';
import Footer from '../Footer'
import Navbar from '../Navbar'
import OpenAcc from '../OpenAcc'

function PricingPage() {
    return ( 
        <>
            <Hero/>
            <OpenAcc/>
            <Brokerage/>
        </>
     );
}

export default PricingPage;