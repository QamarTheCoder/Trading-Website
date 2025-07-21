import React from "react";

function Universe() {
    return ( 
        <div className="container text-center">
            <h1>The ZaraDay Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row mt-5">
                <div className="col p-3">
                    <img style={{'width':'200px'}} src="media/smallcaseLogo.png"/>
                    <p className="text-small  text-muted mt-3 mb-5">Thematic investment platform</p>
                    <br/>
                    <img style={{'width':'200px'}}  src="media/zerodhaFundhouse.png"/>
                    <p className=" text-small text-muted mt-3 mb-5">Assets managment</p>

                </div>
                <div className="col p-3">
                    <img style={{'width':'200px'}} src="media/streakLogo.png"/>
                    <p className="text-small  text-muted mt-3 mb-5">Algo and strategy platform</p>
                    <br/>

                    <img style={{'width':'200px'}} src="media/goldenpiLogo.png"/>
                    <p className="text-small  text-muted mt-3 mb-5" > Bonds trading platform</p>

                </div>
                <div className="col p-3">
                    <img style={{'width':'200px'}} src="media/sensibullLogo.svg"/>
                    <p className="text-small  text-muted mt-3 mb-5">Option trading platform platform</p>
                    <br/>

                    <img style={{width:'150px'}} src="media/dittoLogo.png"/>
                    <p className="text-small  text-muted mt-3 mb-5 ">doingg oing oing oing platform</p>


                </div>
            </div>
            <button style={{width:'15%', margin:'0 auto'}} className="p-2 btn btn-primary mb-5">Sign up Now</button>

        </div>
     );
}

export default Universe;