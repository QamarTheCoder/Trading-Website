import React,{useState} from "react";
import {Tooltip, Grow} from '@mui/material';
import { watchlist } from "../data/data";
import{ BarChartOutlined, ChatRounded, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz} from '@mui/icons-material';
const WatchList = () => {
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
  return(
    <span  className="actions">
      <span>
  <Tooltip
  title='Buy (b)'
  TransitionComponent={Grow}
  arrow
  placement="top" >
    <button className="buy">Buy</button> 
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