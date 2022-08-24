import React from 'react'
import pic from './gentlemen.jpg';
import './Home.css';

export const Home = () => {
  return (
    <div className='home-container'>
        <div className='intro'>
            Hi <br/>
            I am <br/>
            Pankaj Kumar Sahu <br/>
            a Full Stack Developer
        </div>
        <div className='my-pic'>
            <img src = {pic} alt =" my-pic" />
        </div>
    </div>
  )
}
