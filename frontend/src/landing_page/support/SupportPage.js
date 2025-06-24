import React from 'react';
import Hero from './Hero';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CreateTicket from './CreateTicket';
import Support from './Support';

function SupportPage() {
    return ( 
        <>
        <Hero/>
        <CreateTicket/>
        <Support/>

        </>
     );
}

export default SupportPage;