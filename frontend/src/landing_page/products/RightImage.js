import React from "react";

function RightImage({imgURL , topic, desc, learnMore}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col p-5 mt-5">
                    <h1>{topic} </h1>
                    <p className="mb-3 mt-3">{desc} </p>
                    <p className="mb-4"><a href={learnMore} style={{textDecoration:'none'}}>Learn More ➡</a></p>
                </div>
                <div className="col p-5">
                    <img src={imgURL} />
                    
                </div>
            </div>
        </div>
     );
}

export default RightImage;