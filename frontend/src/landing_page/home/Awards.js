import React from "react";

function Awards(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col p-5">
                    <img src="media/largestBroker.svg" alt="BrokerImage"/>
                </div>
                <div className="col p-5">
                    <h1>Largest Stock Broker In Pakistan</h1>
                    <p className="mt-2">More than half of the worlds population treats this website like its somekind of gold, and you can also discover properties like:</p>
                    <div className="row mt-5">
                        <div className="col">
                            <ul>
                                <li><p>Futures & Options</p></li>
                                <li><p>Makes you go broke</p></li>
                                <li><p>Currency Market prices</p></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li><p>Mutual friendships</p></li>
                                <li><p>Bonds and trust</p></li>
                                <li><p>IDK what i am talking about</p></li>
                            </ul>
                        </div>
                    </div>

                    <img src="media/pressLogos.png" style={{width:'75%'}} className="mt-3"/>
                    
                </div>
            </div>
        </div>
    );
}

export default Awards;