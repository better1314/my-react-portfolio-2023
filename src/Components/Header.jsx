import React from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';

function Header(){
    return (
        <>
        <div className='header-container'>
            <Link to="/" style={{textDecoration : 'none'}}><div className='header-title'>My Portfolio.</div></Link>
            <div className='header-button'>
                <Link to="/chatroom"><button type="button">Let's Chat</button></Link>
            </div> 
        </div>
        <div className='seperate-line'/>
        </>
    );
}

export default Header;