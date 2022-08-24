import React from 'react'
import "./ContactMe.css";

export const ContactMe = () => {
  return (
    <div className='container'>
    <div className='header'>ContactMe</div>
    <form >
      <label className='Name'>Name</label>
      <input type = "text" placeholder='Name'></input>
      <label className='Email'>Email</label>
      <input type = "text" placeholder='Email'></input>
      <label className='Message'>Message</label>
      <textarea type = "text" className='message-box'  placeholder='Write here ..'></textarea>
      <button className='send'>Send</button>
    </form>
    </div>
  )
}
