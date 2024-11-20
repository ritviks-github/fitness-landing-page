import React from 'react';
import i1 from './bannerIphone.png';
import './Banner.css';
export default function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-text">
        <h3>Hey, Awesome Coach</h3>
        <h5>
          Expand Your Reach, Inspire More Lives{' '}
          <span className="highlight">Join FitnEarnPal Today!</span>
        </h5>
        <p>A global platform for coaches to connect, Inspire and change lives</p>
        <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                    <button className='downloadBtn'
            onMouseOver={(e) => e.target.style.backgroundColor = "#ff3d00"} 
            onMouseOut={(e) => e.target.style.backgroundColor = "#ff5733"}>
            <img 
                src="https://i.pinimg.com/originals/e1/62/7e/e1627e71009431423428acc51a000495.png" 
                alt="Google Play" 
                style={{width: "20px", height: "20px", marginRight: "10px"}} 
            />
            <a target='_blank' style={{textDecoration:'none',color:'white'}} href="https://apps.apple.com/in/app/fitnearn-exercise-earn-enjoy/id6476557022">Get it on Google Play</a>
            </button>
            <button className='downloadBtn'
            onMouseOver={(e) => e.target.style.backgroundColor = "#ff3d00"} 
            onMouseOut={(e) => e.target.style.backgroundColor = "#ff5733"}>
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUdxrBVI_eXPd3BfxpIhbxT82TZlieaNvag&s" 
                alt="App Store" 
                style={{width: "20px", height: "20px", marginRight: "10px"}} 
            />
             <a target='_blank' style={{textDecoration:'none',color:'white'}} href="https://apps.apple.com/in/app/fitnearn-exercise-earn-enjoy/id6476557022">Get it on App Store</a>
            </button>
        </div>
      </div>
      <div className="banner-image">
        <img  src={i1} alt="FitnEarnPal Banner" />
      </div>
    </div>
  );
}
