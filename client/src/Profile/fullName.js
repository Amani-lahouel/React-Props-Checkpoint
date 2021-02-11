import React from 'react';
import propTypes from 'prop-types';
import { render } from '@testing-library/react';
const Profile = (props )=> {
  function handleName(e) {
  e.preventDefault();
alert(`Hello ${props.FullName}`) ;
  }
    return (
    <div>
          <h1>
          <img src={props.children}/>
          
         </h1>
         <h1 style={{textDecoration:'underline', color:'gray'}}>My Name: {props.FullName}</h1>
        <h1 style={{textDecoration:'underline', color:'gray'}}>BIO: {props.bio}</h1>
         <h1 style={{textDecoration:'underline', color:'gray'}}>Profession : {props.profession}</h1>
   </div>
       
    )
}

Profile.defaultProps = {
  FullName: 'Amani Lahouel',
  bio:'I am a 25 year old , love shopping and taking a photos ',
  profession:'Full stack web developer '
};
Profile.propTypes={
  FullName: propTypes.string,
  bio: propTypes.string,
  profession: propTypes.string,
  width: propTypes.any,
  source: propTypes.any,
  handleName: propTypes.func
}

export default Profile;