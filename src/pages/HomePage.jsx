import React from 'react';
import '../css/App.css';
import Mainpage from '../Components/Mainpage'
import Footer from '../Components/Footer'
import AboutMe from '../Components/AboutMe';
import MySkills from '../Components/MySkills';
import MyJourney from '../Components/MyJourney';
import Header from '../Components/Header';

function HomePage() {
  return (
    <div className="App">
      
      <div className='snap-scroll-container'>
        <div className='snap-scroll-child'>
          <Header/>
          <Mainpage/>
        </div>
        <div className='snap-scroll-child'>
          <AboutMe/>
        </div>
        <div className='snap-scroll-child'>
          <MySkills/>
        </div>
        <div className='snap-scroll-child'>
          <MyJourney/>
        </div>
        <div className='snap-scroll-child-end'>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;