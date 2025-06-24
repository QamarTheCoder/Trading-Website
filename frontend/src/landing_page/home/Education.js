import React from "react";

function Education(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <img src="media/education.svg" style={{width:'70%'}}/>
                </div>
                <div className="col">
                    <h1 className="mb-5">Shitty open market Education</h1>
                    <p className="mb-4">This website rank of #2 in the world , in providing education that absolutely dosent play a role in the students life. #1 spot is ofcourse occupied by Schools and colleges</p>
                    <a style={{textDecoration:'none', marginRight:'2rem'}} href='#'> Verisity ➡</a>
                    
                    <p className="mt-5 mb-3">The most active gambling community in All of Pakistan, go ask questions so you can gamble too</p>
                    <a style={{textDecoration:'none', marginRight:'2rem'}} href='#'>Trading Q&A ➡</a>

                </div>
            </div>
        </div>
    );
}
export default Education;