import React from 'react';

function Team() {
    return ( 
         <div className="container">
      <div className="text-center mt-5 ">
        <h1 className="fs-2  ">
          People
        </h1>
      </div>
      <div className="row p-2">
        <div className="col mr-5 p-5 text-center mt-5" style={{lineHeight:'1.5'}}>
          <img src='media/qamar.jpg' style={{width:'100%', borderRadius:'200px'}}/>
          <p className='fs-5 mt-5 '>Berozgar Qamar</p>
          <p className='fs-6 mt-1 text-muted'>Founder , CEO of this scamming agency</p>
        </div>
        <div className="col ml-5 p-5" style={{lineHeight:'1.7'}}>
          <p className="mb-5 fs-5 text-muted">
            Meet Berozgar Qamar — unemployed by choice, but mostly by circumstance. 
            After applying to 342 jobs and getting ghosted by 341 (one was a catfishing scam), 
            he decided to create his own failure.
            </p>
            <p className="mb-5 fs-5 text-muted">
            The Honest Money Scamming Agency was born in a moment of pure inspiration 
            — and job rejection. Armed with a broken laptop, an empty wallet, and a heart 
            full of delusion, Qamar knew it was time to monetize his unemployment.
            </p>
            <p className="mb-5 fs-5 text-muted">
            Today, Qamar proudly leads the agency from his bed, still refreshing job portals 
            and wondering if “CEO of scam” counts as work experience. If any one has a job offer than Connect with him on <a style={{textDecoration:'none'}} href='https://www.instagram.com/qamarthecoder/'>Instagram</a>
            </p>

        </div>
      </div>
    </div>
     );
}

export default Team;