import React from 'react';

function Hero() {
    return ( 
        <div className='Container mb-5'>
            <div className='row text-center'>
                <img src='media/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-1'>Invest in Everything</h1>
                <p>Online Platform To Invest in things</p>
                <button className='p-2 btn btn-primary mb-5' style={{width:'19%', margin:'0 auto'}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;