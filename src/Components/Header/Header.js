import React from 'react'
import './Header.css';
import {Avatar, Icon} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Logo from '../../Resources/Learnzilla.png';
import {} from '@material-ui/core';
function Header() {
    return (
        <div className="Header">
            <div className="Left_container">
                <img src={Logo} alt= "Logo" height="90px" width="90px"/>
             <div className="User">
             <span className="navElement">Home</span>
             <Icon><HomeIcon htmlColor="#fff"/></Icon>
             </div>
            
            </div>

            <div className="Right_container">
            
             <span className="navElement">Courses</span>
             
             <span className="navElement">Books</span>

             <div className="User">
             <Avatar src={Logo}/>
             <span className="navElement">Shruti</span>
             </div>
            </div>
        </div>
    )
}

export default Header
