import React from 'react';

function Hero() {
    return (
        <header style={{"backgroundColor":'#387ED1'}}>
        <div className='container text-white'>
            <div className='row' >
                <div className='col p-5 mb-3 me-5'>
                    <h3 className='mb-5  mt-5 fw-normal fs-4'>Support Portal</h3>
                    <h2 className='mb-3 mt-5 fw-normal fs-3'>Search for an answer or browse help topics to create a Ticket</h2>
                    <form class="d-flex" role="search" className='mb-3'>
                        <input class="form-control me-2 fs-6 p-4 text-muted text-center" type="search" placeholder="Eg: How do i activate F&O, why is my order getting rejected..." aria-label="Search" style={{'width':'31rem'}} />
                    </form>
                    <p><a href='#'  className='text-white'>Track account opening</a> &nbsp; <a href='#'  className='text-white'>Track segment activation</a>  &nbsp; <a href='#'  className='text-white'>Intrady</a>
                      &nbsp;  <a href='#'  className='text-white'>margins</a> &nbsp;  &nbsp;<a href='#'  className='text-white'>Kite user manual</a></p>
                </div>
                <div className='col p-5 mb-2 ms-5'>
                    <p className='text-end mb-5  mt-5 fw-light fs-5'><a href='#'  className='text-white'>Track Tickets</a></p>
                    <h2 className='mb-3 mt-5 fw-normal fs-3'>Featured</h2>
                    <ol>
                        <li><p ><a href='#' className='text-white'>Current Takeovers and Delisting - January 2024</a></p></li>
                        <li><p ><a href='#'  className='text-white'>Latest Intradery Leverages - MIS & CO</a></p></li>
                    </ol>

                </div>
            </div>
        </div>
        </header> 
     );
}

export default Hero;