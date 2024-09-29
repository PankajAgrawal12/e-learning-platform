import React from 'react';
import '../styles/HomePage.css';
import boy from '../images/Boy attending online classes - 1280x958 1.png';
import Group3 from '../images/Group 3.png';

function HomePage() {
  return (
    <>
      <div className='hero-section'>
        <div className='left-hero-container'>
          <div className='heading'>
            <h1>Find The Best Online Courses & Learn</h1>
          </div>
          <div className='hero-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque, enim quis laoreet tincidunt, elit massa mattis erat, ac blandit sapien diam at massa.
          </div>
          <button className='hero-btn'>Explore Now</button>
        </div>

        <div className='right-hero-container'>
          <img src={boy} alt="Boy attending online classes" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
