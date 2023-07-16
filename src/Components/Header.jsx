import React from 'react';
import '../css/App.css';

function Header(){
    return (
        <>
        <div className='header-container'>
            <div className='header-title'>My Portfolio.</div>
            <div className='header-button'>
                <button type="button">Download</button>
            </div> 
        </div>
        <div className='seperate-line'/>
        </>
    );
}

export default Header;