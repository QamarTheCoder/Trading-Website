import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-4'>
                    <h2 className='mb-5'>Unreasonable Pricing</h2>
                    <p>Prices so high , it will make you bankrupt in seconds and then you will have to find a new job to survive but it won't happen and you'll die in agony while we will enjoy off of YOUR money</p>
                    <a style={{textDecoration:'none', marginRight:'2rem'}} href='#'>See Pricing ➡</a>


                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col border p-4'>
                            <h1 className='mb-3'>0 PKR</h1>
                            <p>Yes! this is the amount of refund you will be getting after getting scammed</p>

                        </div>
                        <div className='col border p-4'>
                            <h1 className='mb-3'>20 PKR</h1>
                            <p>This will be your future bank balance after trading from this site</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;