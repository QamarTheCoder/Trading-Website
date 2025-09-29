import React,{useState,useEffect} from "react";
import axios from 'axios'



const Holdings = () => {
  let[Holdingsdata,setHoldingsdata]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:2020/addingHoldings').then((res)=>{
      console.log(res.data)
      setHoldingsdata(res.data)
    })
  },[])
  return (
    <>
      <h3 className="title">Holdings ({Holdingsdata.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {Holdingsdata.map((stock,index)=>{
            const curValue=stock.price * stock.qty;
            const isProfit= curValue - stock.avg * stock.qty >=0.0;
            const profClass= isProfit ? 'profit' : 'loss'
            const dayClass= stock.isLoss ? 'loss' : 'profit'
            console.log(stock.name)

            console.log(stock.price)
            console.log(stock.qty)
            console.log(stock.avg)
            return(
              <tr>

            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{curValue.toFixed(2)}</td>
            <td>{(curValue-stock.avg*stock.qty).toFixed(2)}</td>
            <td className={profClass}>{stock.net}</td>
            <td  className={dayClass}>{stock.day}</td>
          </tr>
            )

          })}
         
        </table>
      </div>

      
    </>
  );
};

export default Holdings;
