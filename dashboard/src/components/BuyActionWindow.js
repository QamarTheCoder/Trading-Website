import React,{useState} from "react";
import './BuyActionWindow.css'
import { TextField,Button } from "@mui/material";
import { Link } from "react-router-dom";
import {GeneralContext, useGeneralContext} from "./GeneralContext";
import axios from 'axios'

function BuyActionWindow({uuid}){

    const {CloseBuyWindow} = useGeneralContext();
    const handleCloseWindow =()=>{
        CloseBuyWindow();
    }

   
    const [Qty,setQyt]=useState(1);
    const [Price,setPrice]=useState(0.0);

    const handleQyt=(e)=>{
        setQyt(e)
    }
    const handlePrice=(e)=>{
        setPrice(e)
        
    }
     const handleBuyWindow=()=>{
        axios.post('http://localhost:2020/neworderData',
            {
            name: uuid,
            qyt: Qty,
            price: Price,
            mode: 'BUY',
            })
        handleCloseWindow();

    }

    return(
        <div className="container">
            
            <div className="inputs">
                <TextField id="outlined-basic" label="Qty" variant="outlined" onChange={(e)=>{handleQyt(e.target.value)}} value={Qty} />
                <TextField type="number" id="outlined-basic" label="Price" variant="outlined" onChange={(e)=>{handlePrice(e.target.value)}} value={Price}/>
                
            </div>

            <div className="buttons">
                <p>Margin required 150PKR</p>
                <span>
                <Link className="btn btn-blue" onClick={handleBuyWindow}>Buy</Link>
                <Link  className="btn btn-grey" onClick={handleCloseWindow}>Close</Link>
                </span>
            </div>
        </div>
    )
}

export default BuyActionWindow;