import React from 'react';
import './Project.css';

export const Projects = () => {
const projectList = [{
  id : 1,
  title : "Analysis Performance of low GWP refrigerant",
  desc : 'Analyze the performance of five different low GWP refrigerant.On different key performance meters like mass flowrate, volumic specific refrigeration etc.' ,
  tools : " Matlab, Refpro, EES, Excel" ,   
},
{
  id : 2,
  title : "Real-Estate Price Predictor",
  desc : 'A machine learning model is developed to predict the price of Real Estate using the provided data sets. Understand the steps involved in building a Machine Learning model.' ,
  tools : "Jupyter Notebook , VS code" ,   
},
{
  id : 3,
  title : "Calculator-App",
  desc : 'In this project, a simple calculator is made to understand the different components of React.js.' ,
  tools : "React Js, VS code" ,   
},
{
  id : 4,
  title : "Mess Management",
  desc : 'Complete development of Database Management system for transferring offline register management in a hostel mess to digital register management. ' ,
  tools : "NetBeans (GUI), Java (Design), MySql (Authentication, Database)" ,   
},
];

const projectItems = projectList.map((item)=>{
  return(
    <>
    <div className='title'>{item.title}</div>
    <div className='desc'>{item.desc}</div>
    <div className='tools'>{item.tools}</div>
    </>
  )
})

  return (
    <div className="container">
    <div className="header">PROJECT</div>
    {projectItems}
  </div>
  )
}
