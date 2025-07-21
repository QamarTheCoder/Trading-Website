import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <h3 className='mb-3 mt-5'>To create a ticket , Select a relevant topic</h3>
            <div className='row'>
                <div className='col mt-1 p-5'>
                    <h5 className='mb-5 fs-8'><i class="fa fa-plus-circle fs-5" aria-hidden="true"></i> Account Opening</h5>
                    <p><a href='#' style={{'textDecoration':'none'}}>Online Account Opening</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Offline Account Opening</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Company , Partnership and HUF account</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>NRI Account Opening</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Changes at zaraday</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Zaradat IDGAF FIRST Bank 3-in-1 account</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Getting started</a></p>
                </div>

                <div className='col mt-2 p-5'>
                    <h5  className='mb-5 fs-8'><i class="fa fa-user fs-5 " aria-hidden="true"></i> Your Zaraday Account</h5>
                    <p><a href='#' style={{'textDecoration':'none'}}>Login Credentials</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Account Modification and segment addition</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>DP ID and bank details</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Your Profile</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Transfer and conversion of shares</a></p>
                </div>

                <div className='col mt-2 p-5'>
                    <h5  className='mb-5 fs-8'><i class="fa fa-bar-chart fs-5" aria-hidden="true"></i> Your Zaraday Account</h5>
                    <p><a href='#' style={{'textDecoration':'none'}}>Margin, Product and Order</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Kite , Web and Mobile</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Trading FAQs</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Corporate Actions</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Sentinel</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Kite API</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Stock Reports+</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Pi and other platforms</a></p>
                </div>
            </div>


             <div className='row mt-4'>
                <div className='col mt-2 p-5'>
                    <h5 className='mb-5 fs-8'><i class="fa fa-credit-card fs-5" aria-hidden="true"></i> Funds</h5>
                    <p><a href='#' style={{'textDecoration':'none'}}>Adding Funds</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Funds Withdrawl</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Emandates</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Adding Bank Accounts</a></p>
                </div>

                <div className='col mt-2 p-5'>
                    <h5  className='mb-5 fs-8'><i class="fa fa-circle-o-notch fs-5" aria-hidden="true"></i> Console</h5>
                    <p><a href='#' style={{'textDecoration':'none'}}>Reports</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Ledger</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Portfolio</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>60 Days challenge</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>IPO</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Referral Program</a></p>
                </div>

                <div className='col mt-2 p-5'>
                    <h5  className='mb-5 fs-8'><i class="fa fa-circle-o fs-5" aria-hidden="true"></i> Coin</h5>
                    <p><a href='#' style={{'textDecoration':'none'}}>Understanding Mutui</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>About Coin</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Buying and selling through </a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Starting and SIP</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Managing your Portfolio</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Coin App</a></p>
                    <p><a href='#' style={{'textDecoration':'none'}}>Moving to Coin App</a></p>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;