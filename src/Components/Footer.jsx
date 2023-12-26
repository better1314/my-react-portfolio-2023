import React from 'react';
import '../css/App.css';

function Footer(){
    return(
        <>
        <div className='footer-container'>
            <div className='seperate-line'/>
            @2023 Gan ZK <br/>
            Loosely designed in Figma and coded in <span className='blue-word'>Visual Studio Code</span>. Built with <span className='blue-word'>ReactJS</span>, deployed with CPanel Hosting.
        </div>
        </>
    );
}

export default Footer;