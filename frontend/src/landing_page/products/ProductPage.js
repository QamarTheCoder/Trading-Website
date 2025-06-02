import React from 'react';
import Hero from './Hero';
import LeftImage from './LeftImage';
import RightImage from './RightImage';
import Navbar from '../Navbar'
import Footer from '../Footer'

function ProductPage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <LeftImage/>
            <RightImage/>
            <Footer/>
        </>
     );
}

export default ProductPage;