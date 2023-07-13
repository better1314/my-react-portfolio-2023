import React from 'react';
import './css/App.css';
import Header from './Components/Header'
import Mainpage from './Components/Mainpage'
import Footer from './Components/Footer'
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <div className="App">
      <Header/>
      <Mainpage/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;
