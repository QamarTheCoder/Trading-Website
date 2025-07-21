import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center mb-5 p-5'>
            <div className='text-center p-5 border-bottom'>
                <h1 className='mb-3 mt-5 fs-1'>Pricing</h1>
                <p className='text-muted fs-5 fw-medium mb-5 p-2'>Free equity investments and flat 20$</p>
            </div>
            <div className='row mt-5'>
                <div className='col p-2'>
                    <img src='media/pricingEquity.svg'/>
                    <h2>Free equity delievery</h2>
                </div>
                <div className='col p-2'>
                    <img src='media/intradayTrades.svg'/>
                    <h2>intraday Trades</h2>

                </div>
                <div className='col p-2'>
                    <img src='media/pricingEquity.svg'/>
                    <h2>Free delievery</h2>

                </div>
            </div>
        </div>
     );
}

export default Hero;