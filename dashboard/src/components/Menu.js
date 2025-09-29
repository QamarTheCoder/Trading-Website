import React , {useState} from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
const Menu = () => {
  const[isMenuItemSelected,setIsMenuItemSelected]=useState(0);
  const[isprofileclicked,setIsprofileclicked]=useState(false);

  const handleClick=(index)=>{
    setIsMenuItemSelected(index);
  }
  const handleProfileclicked=(index)=>{
    setIsprofileclicked(!isprofileclicked) 
  
    }
  
  const menuClass='menu';
  const ActivemenuClass='menu selected';
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{'textDecoration':'none'}} to={'/'} onClick={()=>handleClick(0)}>
              <p className={isMenuItemSelected ===0 ? ActivemenuClass: menuClass }>Dashboard</p>
            </Link>
          </li>
          <li>
             <Link style={{'textDecoration':'none'}} to={'/orders'} onClick={()=>handleClick(1)}>
              <p className={isMenuItemSelected ===1 ? ActivemenuClass: menuClass }>Orders</p>
            </Link>
          </li>
          <li>
             <Link style={{'textDecoration':'none'}} to={'/holdings'} onClick={()=>handleClick(2)}>
              <p className={isMenuItemSelected ===2 ? ActivemenuClass: menuClass }>Holdings</p>
            </Link>
          </li>
          <li>
             <Link style={{'textDecoration':'none'}} to={'/positions'} onClick={()=>handleClick(3)}>
              <p className={isMenuItemSelected ===3 ? ActivemenuClass: menuClass }>Positions</p>
            </Link>
          </li>
          <li>
             <Link style={{'textDecoration':'none'}} to={'/funds'} onClick={()=>handleClick(4)}>
              <p className={isMenuItemSelected ===4 ? ActivemenuClass: menuClass }>Funds</p>
            </Link>
          </li>
          <li>
             <Link style={{'textDecoration':'none'}} to={'/apps'} onClick={()=>handleClick(5)}>
              <p className={isMenuItemSelected ===5 ? ActivemenuClass: menuClass }>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileclicked}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
