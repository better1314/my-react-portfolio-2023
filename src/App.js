import React from 'react';
import './css/App.css';
import Header from './Components/Header'
import Mainpage from './Components/Mainpage'
import Footer from './Components/Footer'
import AboutMe from './Components/AboutMe';
import MySkills from './Components/MySkills';
import MyJourney from './Components/MyJourney';

function App() {
  return (
    <div className="App">
      <Header/>
      <Mainpage/>
      <AboutMe/>
      <MySkills/>
      <MyJourney/>
      <Footer/>
    </div>
  );
}

export default App;
