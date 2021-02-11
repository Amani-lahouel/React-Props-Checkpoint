import React from 'react';
import './App.css';
import Profile from './Profile/fullName';
import img1 from './Profile/ssss.png';
import Myphoto from './Profile/Myphoto';
function App() {
  
  const styleObject = {  textAlign:'center' , textdecoration:'inline'}
  return (
   <div className = "header_color"> 
<div className="App" style={styleObject}>
  <h1 style={{textDecoration:'underline' , color:'gray'}}>HELLO</h1>
  <div>
    <Myphoto> </Myphoto>
  </div>
     <Profile
     FullName='Amani Lahouel'
     bio='I am a 25 year old , I love shopping and taking a photos  '
     profession='Full stack web developer '
     />
    </div>
    </div>
  );
}

export default App;
