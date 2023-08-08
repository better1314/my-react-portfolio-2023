import React from 'react';
import '../css/App.css';

function Header(){
    return (
        <>
        <div className='whole-chat-room'></div>
        <div className='seperate-line'/>
        <form>
        <div className='chat-input-section'>
                <div className='input-text'>
                    <input type="text" name="chat" style={{width:'100%'}}/>
                </div>
                <div className='send-button'>
                    <input type="submit" value="Send" />
                </div>
        </div>
        </form>
        </>
    );
}

export default Header;