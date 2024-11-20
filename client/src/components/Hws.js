import React from 'react';
import './Hws.css';
import CustomCarousel from './CustomCarousel';

const steps = [
  {
    icon: '📋', 
    title: 'Register',
    description: 'Support for multiple languages, making health monitoring accessible and easy for users around the globe.'
  },
  {
    icon: '✔️',
    title: 'Verify',
    description: 'Support for multiple languages, making health monitoring accessible and easy for users around the globe.'
  },
  {
    icon: '🖼️',
    title: 'Create Content',
    description: 'Support for multiple languages, making health monitoring accessible and easy for users around the globe.'
  },
  {
    icon: '👥',
    title: 'Engage With Users',
    description: 'Support for multiple languages, making health monitoring accessible and easy for users around the globe.'
  }
];
const imagesSet = [
    'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
    'https://unavatar.io/github/1stevengrant',
    'https://randomuser.me/api/portraits/men/32.jpg'

]
const Hws = () => {
  return (
    <>
    <div className="how-it-works">
      <h2>How It Works ?</h2>
      <div className="steps">
        {steps.map((step, index) => (
            <div key={index} className="step">
            <div className="icon">{step.icon}</div>
            <h3 style={{fontWeight:'500'}}>{step.title}</h3>
            <br />
            <p style={{fontWeight:'100'}}>{step.description}</p>
          </div>
        ))}
      </div>
    </div><br /><br />
    <h2 style={{color:'white',fontWeight:'700'}}>What our <span style={{color:'#ff5733',fontWeight:'900'}}>Coach</span> Say</h2><h4 style={{color:'white',fontWeight:'100'}}>FitnEarnPal empowers coaches to grow and reach a global audience while valuable health and fitness insights to users. 
A global platform for coaches to connect, Inspire and change Lives</h4>
<CustomCarousel images={imagesSet}></CustomCarousel>
    </>
  );
};

export default Hws;
