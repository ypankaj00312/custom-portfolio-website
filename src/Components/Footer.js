import React from 'react'

export const Footer = () => {

    const footerStyle = {
        width: '100vw',
        height: "20vh",
        backgroundColor : "grey",
        marginTop : '10vh',
        textAlign: 'center',
        paddingTop: '3.5rem',
        fontStyle: 'italic',
   
    };
  return (
    <div className='Footer' style = {footerStyle}>copyright 2022 © MyPortfolio.com </div>
  )
}
