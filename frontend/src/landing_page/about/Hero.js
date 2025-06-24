import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="text-center mt-5 p-5  border-bottom">
        <h1 className="fs-2 p-5  mt-2">
          We are an honest money scamming Agency, <br/>looking forward to making our
          fourtune with YOUR money
        </h1>
      </div>
      <div className="row p-5 border-bottom">
        <div className="col mr-5 p-5" style={{lineHeight:'1.7'}}>
          <p className="mb-5 fs-5 text-muted">
            Welcome to your worst financial decision! We’re the Honest Money
            Scamming Agency — proudly robbing you blind since earlier this
            morning.
          </p>
          <p className="mb-5 fs-5 text-muted">
            we offer a wide range of completely unreliable services
            designed to separate you from your cash with maximum inefficiency.
            Whether it's our "Invisible Crypto Investment," our "NFTs of Air,"
            or the classic "Give Us Money for No Reason" plan, we guarantee a 0%
            return and 100% regret. No experience? No problem! Neither do we.
          </p>
          <p className="mb-5 fs-5 text-muted">
            We’re scammers—with a dream. And that dream is your money.
          </p>
        </div>
        <div className="col ml-5 p-5" style={{lineHeight:'1.7'}}>
          <p className="mb-5 fs-5 text-muted">
            We use cutting-edge technology like broken spreadsheets, expired trial software, 
            and vibes. Our IT department is just Greg, and Greg once installed a toolbar that 
            bricked our entire system. He’s now our CTO.
            </p>
            <p className="mb-5 fs-5 text-muted">
            Every new employee receives a comprehensive welcome kit: one pen that doesn’t work, 
            a company handbook stolen from another company, and a firm handshake that lasts 
            just a little too long. Culture is important to us — mostly cult, less ure.
            </p>
            <p className="mb-5 fs-5 text-muted">
            Our refund policy is simple: if you find it, let us know. Seriously, we’ve been 
            looking for it since 2021.
            </p>

        </div>
      </div>
    </div>
  );
}

export default Hero;
