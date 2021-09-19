import React from 'react';
import '../style/Header.css';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import { Message } from '@material-ui/icons';
import TinderLogo from '../images/tinder.png';
function Header(){

    return(
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>

            <img 
                className="header_logo"
                src={TinderLogo}
                alt=""
            />

            <IconButton>
                <Message fontSize="large" className="header_icon"/>
            </IconButton>




        </div>

    );
}

export default Header;