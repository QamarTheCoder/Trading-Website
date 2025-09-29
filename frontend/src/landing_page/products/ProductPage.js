import React from 'react';
import Hero from './Hero';
import LeftImage from './LeftImage';
import RightImage from './RightImage';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <>
            <Hero/>
            <LeftImage imageURL={'media/kite.png'} topic={'Kite'} desc={'Our ultra fast trading platform with streaming fake market data, advance charts, elegant UI and more.  Enjoy the kite experience, working on making it better for you to take your money and your familys too!'} tryDemo={'#'} learnMore={'#'} googlePlay={'#'} appStore={'#'}/>

            <RightImage imgURL={'media/console.png'} topic={'Console'} desc={'The central dashboard for your ZeraDay account , helping you gain insights to your trades and investments with indepths reports and visualitzation'} learnMore={'#'}/>

            <LeftImage imageURL={'media/coin.png'} topic={'Coin'} desc={'Buy direct mutual funds + friendship as the only thing you will be getting is frienship from us and not the funds because well it will be the cost of your friendship with us <3 , which will be delieverd directly to your account'} tryDemo={'#'} learnMore={'#'} googlePlay={'#'} appStore={'#'}/>
            

            <RightImage imgURL={'media/kiteconnect.png'} topic={'Kite Connect API'} desc={'Build these scam trading profile yourself too by integrating our simple HTTP/HTTPS APIS in your progam and yea i have officially lost my mind and i dont know what i am talking about'} learnMore={'#'}/>

            <LeftImage imageURL={'media/varsity.png'} topic={'Varsity Mobile'} desc={'Easy to grasp, collection of tutorials of how to trade with market lessons which are desiged specifically to empty your pockets and fill ours with your money and hopefully become the next among fortune 500 company'} tryDemo={'#'} learnMore={'#'} googlePlay={'#'} appStore={'#'}/>
            
            <Universe/>
        </>
     );
}

export default ProductPage;