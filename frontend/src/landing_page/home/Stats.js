import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
    return (  
        <div className='container mt-5'> 
            <div className='row'>
                <div className='col p-3'>
                    <h1 className='mb-5 fs-2'>Trust with confidence</h1>
                    <h3 className='fs-4'>Customer last-always</h3>
                    <p className='mb-3 text-muted'>Thats why no one trusts this websites and there is absolutely 0 traffic</p>
                    <h3 className='fs-4'>Spam supported</h3>
                    <p className='mb-3 text-muted'>Your email witll get flooded with annoying spam emails from our site</p>
                    <h3 className='fs-4'>The ZaraDay universe</h3>
                    <p className='mb-3 text-muted'>Not just an app but money trafficking agency, having the record of 20+ startups being failed because of us</p>
                    <h3 className='fs-4'>Do worse with Money</h3>
                    <p className='mb-3 text-muted'>We provide services that will help you lose money instantly , because we CARE <strike>about ourselves</strike></p>
                </div>
                <div className='col text-center p-3'>
                    <img style={{width:'85%'}} src='media/ecosystem.png'/>
                    <div >
                        <a style={{textDecoration:'none', marginRight:'2rem'}} href='#'>Explore our products ➡</a>
                        <Link style={{textDecoration:'none'}} to='/'>Try Kite</Link>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Stats;