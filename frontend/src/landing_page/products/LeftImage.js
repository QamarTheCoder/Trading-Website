import React from "react";

function LeftImage({imageURL,topic,desc,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col p-5">
                    <img src={imageURL} />
                </div>
                <div className="col p-5 mt-5">
                    <h1>{topic} </h1>
                    <p className="mb-3 mt-3">{desc} </p>
                    <p className="mb-4"><a href={tryDemo} style={{textDecoration:'none'}}>Try Demo ➡ </a> &nbsp;  &nbsp;  &nbsp;  &nbsp; <a href={learnMore} style={{textDecoration:'none'}}>Learn More ➡</a></p>
                    <a href={googlePlay}><img src="media/googlePlayBadge.svg"/> </a>
                    <a href={appStore}><img src="media/appstoreBadge.svg"/></a>
                </div>
            </div>
        </div>
     );
}

export default LeftImage;