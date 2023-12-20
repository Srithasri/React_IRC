import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../Assets/Css/style.css'

import {Home,Menu,PenTool,Settings, User} from 'lucide-react'
const Sidebar=({Children})=>
{
    const[isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);
    const menuItem=[
        // {
        //     path:"/",
        //     name:"dashboard",
        //     icon:<Menu />
        // },
        {
            path:"/",
            name:"Home",
            icon:<Home />
        },
        // {
        //     path:"/",
        //     name:"Register",
        //     icon:<PenTool />
        // },
        {
            path:"/",
            name:"Login",
            icon:<User />
        },
        {
            path:"/",
            name:"settings",
            icon:<Settings/>
        }
    ]
    return(
        
            <div className="contain">
                <div style={{width: isOpen? '300px' : '50px'}}className="sidebar">
                    <div className="top">
                        <h1 style={{display: isOpen? "block" : "none"}}className="logo"> FooDle</h1>
                         <div style={{marginLeft: isOpen? '50px' : '0px'}}className="bars">
                            <Menu onClick={toggle}/>
                        </div>    
                    </div>
                    {
                        menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                        ))
                    }
                </div>
                <main>{Children}</main>
            </div>
        
    )
}
export default Sidebar