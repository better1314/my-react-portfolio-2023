import React from 'react';
import './css/App.css';
import Header from './Components/Header';
import HomePage from './pages/HomePage';
import ChatRoom from './pages/ChatRoom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={< HomePage/>} />
        <Route path="/chatroom" element={<ChatRoom />} />
    </Routes>
    </>
  );
}

export default App;
