import { Link } from 'react-router-dom'
import React from 'react'
function Nav()
{
    return (
      
      <div className="nav">
      <div className="nav1">
      <ul>
        <li className="new"><a href='#'>FooDle</a></li>


        
       <Link to='/Login'>
        <li className="nex">Login</li>
        </Link>
        <Link to='/Register'>
          <li className="nex">Register</li>
        </Link>
        <Link to='/Home'>
        <li className="nex">Home</li>
        </Link>
       
      </ul>
    </div>
    </div>
    );
}
export default Nav;