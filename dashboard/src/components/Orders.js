import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Orders = () => {  
  const [ordersData,setordersData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:2020/ordersdata').then((e)=>{
        setordersData(e.data)
        console.log(e.data)
    })
  },[])
  return (
    <div className="orders">
      {ordersData.length===0 ? (
        <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    ) : (
      <div className="order-table">
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Qyt</th>
        </tr>
          {ordersData.map((e)=>{

            return(
              <tr>
                <td>{e.name}</td>
                <td>{e.price}</td>
                <td>{e.qyt}</td>
               </tr>
            )
          })}
         

      </table>
    </div>

    )}
    </div>
  );
};

export default Orders;
