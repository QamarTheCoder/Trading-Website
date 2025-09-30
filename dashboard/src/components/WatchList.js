import React,{useState} from "react";
import {Tooltip, Grow} from '@mui/material';
import { watchlist } from "../data/data";
import{ BarChartOutlined, ChatRounded, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz} from '@mui/icons-material';
import { useGeneralContext } from "./GeneralContext";
import { Doughnutchart } from "./Doughnut";
const WatchList = () => {

  const data = {
      labels: watchlist.map((el)=>el["name"]),
      datasets: [
        {
          label: 'Price',
          data: watchlist.map((el)=>el["price"]),
          backgroundColor: [
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 159, 64, 0.4)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length}/50</span>
      </div>

      <ul className="list">
        {watchlist.map((el,index)=>{

          return(<WatchListItem element={el} key={index}/>)
        })}
      </ul>
    <Doughnutchart data={data}/>

    </div>
  );
};

export default WatchList;

const WatchListItem = ({element})=>{
  const [IsMouseEnter,setIsMouseEnter]=useState(false);
  const handleIsMouseEnter =(e)=>{
    setIsMouseEnter(true)
  }
    const handleIsMouseExit =(e)=>{
    setIsMouseEnter(false)
  }
    
      
    // export const data = {
    //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //   datasets: [
    //     {
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5, 2, 3],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)',
    //       ],
    //       borderColor: [
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)',
    //       ],
    //       borderWidth: 1,
    //     },
    //   ],
    // };

  return(
    <li onMouseEnter={handleIsMouseEnter} onMouseLeave={handleIsMouseExit}>
      <div className="item">
        <p className={element.isDown ? 'down' : 'up'}>{element.name}</p>
        <div className="itemInfo">
          <span className="percent">{element.percent}</span>
          <span className={element.isDown ? 'down' : 'up'}>{element.isDown ? (<KeyboardArrowDown/>) : (<KeyboardArrowUp/>)}</span>
          <span className={element.isDown ? 'down' : 'up'}>{element.price}</span>

      {IsMouseEnter && <WatchListAction uuid={element.name}/>}


        </div>
      </div>
    </li>
  )
}


const WatchListAction=({uuid})=>{


const  {OpenBuyWindow} = useGeneralContext();
const handlebuy=()=>{
  console.log('BUYED')
  OpenBuyWindow(uuid);
}
  return(
    <span  className="actions">
      <span>
  <Tooltip
  title='Buy (b)'
  TransitionComponent={Grow}
  arrow
  placement="top" >
    <button className="buy" onClick={handlebuy}>Buy</button> 
  </Tooltip>

  <Tooltip
  title='Sell (S)'
  TransitionComponent={Grow}
  arrow
  placement="top" >
    <button className="sell">Sell</button> 
  </Tooltip>

  <Tooltip
  title='Analytics (A)'
  TransitionComponent={Grow}
  arrow
  placement="top" >
    <button className="action"><BarChartOutlined className="icon"/></button> 
  </Tooltip>

  <Tooltip
  title='More'
  TransitionComponent={Grow}
  arrow
  placement="top" >
    <button className="action"><MoreHoriz  className="icon"/></button> 
  </Tooltip>
  </span>
  </span>
  )
}