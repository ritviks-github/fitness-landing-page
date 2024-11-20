import React from 'react'
import m1 from './mainI1.png'
import m2 from './mainI2.png'
import m3 from './mainI3.png'
import m4 from './mainI4.png'
import m5 from './mainI5.png'
import m6 from './mainI6.png'
import phone from './mainIphone.png'
import c1 from './circle.png'
import c2 from './circle1.png'
import c3 from './circle2.png'
import c4 from './circle3.png'
import t1 from './tilt1.png'
import t0 from './tilt0.png'
import './Main.css'

export default function Main() {
  return (
    <div>
      <h2 style={{color:'white',fontWeight:'700'}}>Join growing community of Coaches</h2>
      <h4 style={{color:'white',fontWeight:'100'}}>FitnEarnPal is your getaway to connect with a global community of health and fitness enthusiastic, share experience and valuable knowledge, and grow their audience. As a coach you have the power to inspire, educate and motivate users worldwide by creating and sharing impactful content, workout videos, conducting live sessions and much more.</h4>
        <div style={{justifyContent:'center',display:'flex'}}>
            <a style={{textDecoration:'none'}} target='_blank' href='https://apps.apple.com/in/app/fitnearn-exercise-earn-enjoy/id6476557022'><button className='downloadBtn' >Join Now</button></a>
        </div>
        <br /><br /><br />
      <div style={{display:'flex',justifyContent:'center'}}>
        <img style ={{width:'30vw'}} src={m1} />
        <img style ={{width:'30vw'}} src={m2} />
        <img style ={{width:'30vw'}} src={m3} />
      </div>
      <br />
      <div style={{display:'flex',justifyContent:'center'}}>
        <img style ={{width:'30vw'}} src={m4} />
        <img style ={{width:'30vw'}} src={m5} />
        <img style ={{width:'30vw'}} src={m6} />
      </div>
      <br /><br />
      <h2 style={{color:'white',fontWeight:'700'}}>What's in it for <span style={{color:'#ff5733'}}>Coach</span></h2>
        <h4 style={{color:'white',fontWeight:'100'}}>FitnEarnPal empowers coaches to grow and reach a global audience while valuable health and fitness insights to users.A global platform for coaches to connect, Inspire and change Lives</h4>
        <div style={{
  display: 'flex', 
  flexDirection: 'row', 
  justifyContent: 'center', 
  alignItems: 'center',
  gap: '20px', // Added spacing between containers
  flexWrap: 'wrap', // Allows containers to wrap on smaller screens
  padding: '20px', // Added padding to prevent edge contact
  maxWidth: '100%',
  boxSizing: 'border-box'
}}>
  {/* Left Container */}
  <div style={{
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center',
    flex: '1',
    minWidth: '200px',
    marginBottom: '20px', // Adds margin for spacing in smaller screens
    textAlign: 'center' // Ensures text is centered
  }}>
    <div>
      <img src={c1} alt="" />
      <h4 style={{color:'white', fontWeight:'700'}}>Global Audience Access</h4>
      <span style={{color:'white', fontWeight:'100'}}>Helps you gain global audience</span>
    </div>
    <div>
      <img src={c2} alt="" />
      <h4 style={{color:'white', fontWeight:'700'}}>Revenue Opportunities</h4>
      <span style={{color:'white', fontWeight:'100'}}>Helps you to gain global audience</span>
    </div>
  </div>

  {/* Phone Image in the center */}
  <div style={{
    flex: '0 0 auto', // Prevents phone from resizing
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    maxWidth: '300px' // Controls max width of the phone image
  }}>
    <img id='mainImg' src={phone} alt="" style={{maxWidth: '100%', height: 'auto'}} />
  </div>

  {/* Right Container */}
  <div style={{
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center',
    flex: '1',
    minWidth: '200px',
    marginBottom: '20px', // Adjust margin for mobile view
    textAlign: 'center' // Ensures text is centered
  }}>
    <div>
      <img src={c3} alt="" />
      <h4 style={{color:'white', fontWeight:'700'}}>Global Audience Access</h4>
      <span style={{color:'white', fontWeight:'100'}}>Helps you gain global audience</span>
    </div>
    <div>
      <img src={c4} alt="" />
      <h4 style={{color:'white', fontWeight:'700'}}>Revenue Opportunities</h4>
      <span style={{color:'white', fontWeight:'100'}}>Helps you to gain global audience</span>
    </div>
  </div>
</div>
<div>
    <h2 style={{color:'white',fontSize:'700'}}>Key Features</h2>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
        <div style={{backgroundColor:'#373737',borderRadius:'10px',width:'20vw'}}>
            <img style={{width:'80%'}} src={c1} alt="" />
            <h5 style = {{color:'white',fontWeight:'500'}}>Blog Writing</h5>
            <h6 style = {{color:'white',fontWeight:'100'}}>Coach can write blogs</h6>
        </div>
        <div style={{backgroundColor:'#373737',borderRadius:'10px',width:'20vw'}}>
            <img style={{width:'80%'}} src={c2} alt="" />
            <h5 style = {{color:'white',fontWeight:'500'}}>Live Sessions</h5>
            <h6 style = {{color:'white',fontWeight:'100'}}>Coach can create live sessions</h6>
        </div>
        <div style={{backgroundColor:'#373737',borderRadius:'10px',width:'20vw'}}>
            <img style={{width:'80%'}} src={c3} alt="" />
            <h5 style = {{color:'white',fontWeight:'500'}}>Content Creation</h5>
            <h6 style = {{color:'white',fontWeight:'100'}}>Coach can create content</h6>
        </div>
        <div style={{backgroundColor:'#373737',borderRadius:'10px',width:'20vw'}}>
            <img style={{width:'80%'}} src={c4} alt="" />
            <h5 style = {{color:'white',fontWeight:'500'}}>Workout Videos</h5>
            <h6 style = {{color:'white',fontWeight:'100'}}>Coach can create workout videos</h6>
        </div>
    </div>
</div><br /><br />
   
    <h2 style={{color:'white',fontWeight:'700'}}>Become <span style={{color:'#ff5733'}}>Coach</span> Today</h2>
   <div style={{display:'flex',justifyContent:'center'}}>

    <div style={{ position: 'relative', width: '50%' }}>
      {/* iPhone tilted left */}
      <img
        src={t0}
        alt="iPhone Left Tilt"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '85%',
          zIndex: 1,
        }}
      />
      
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent black
          zIndex: 2,
        }}
      ></div>
      
      {/* iPhone tilted right */}
      <img
        src={t1}
        alt="iPhone Right Tilt"
        style={{
          position: 'absolute',
          top: '0',
          left: '0.5',
          width: '100%',
          zIndex: 3,
        }}
      />
    </div>
    </div>
    <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:'60%',textAlign:'center'}}>
                    <button className='downloadBtn'
            onMouseOver={(e) => e.target.style.backgroundColor = "#ff3d00"} 
            onMouseOut={(e) => e.target.style.backgroundColor = "#ff5733"}>
            <img 
                src="https://i.pinimg.com/originals/e1/62/7e/e1627e71009431423428acc51a000495.png" 
                alt="Google Play" 
                style={{width: "20px", height: "20px", marginRight: "10px"}} 
            />
            <a href="https://apps.apple.com/in/app/fitnearn-exercise-earn-enjoy/id6476557022" target='_blank' style={{textDecoration:'none',color:'white'}} >Get it on Google Play</a>
            </button>
            <button className='downloadBtn'
            onMouseOver={(e) => e.target.style.backgroundColor = "#ff3d00"} 
            onMouseOut={(e) => e.target.style.backgroundColor = "#ff5733"}>
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUdxrBVI_eXPd3BfxpIhbxT82TZlieaNvag&s" 
                alt="App Store" 
                style={{width: "20px", height: "20px", marginRight: "10px"}} 
            />
             <a href="https://apps.apple.com/in/app/fitnearn-exercise-earn-enjoy/id6476557022" target='_blank' style={{textDecoration:'none',color:'white'}}>Get it on App Store</a>
            </button>
        </div>
    </div>
     
  ) 
}