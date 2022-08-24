import React from "react";
import './Education.css';


export const Education = () => {
  const education = [
    {  id : 1,
      institute:
        "Indian Institute of Technology (ISM), Dhanbad — B.Tech -Mechanical Engineering",
      degree: "B.Tech",
      period: "JULY 2018 - MAY 2022",
      grade: "CGPA – 7.95",
    },
    { id : 2,
      institute: "JNV RangaReddy,Hyderabad",
      degree: "12th",
      period: "APRIL 2017 - APRIL 2018",
      grade: "Percentage - 96.6%",
    },
    { id : 3,
      institute: "JNV Mana Camp,Raipur",
      degree: "10th",
      period: " APRIL 2015 - APRIL 2016",
      grade: "CGPA - 10",
    },
  ];
  const educationInfo = education.map((items)=>{
    return(<div>
    <div className="institute">{items.institute}</div>
    <div className="degree">{items.degree} - {items.grade}</div>
    <div className="period">{items.period}</div>
    {/* <div className="grade">{items.grade}</div> */}
    <br/>
    </div>
    );
  })
  return (
    <div className="container">
      <div className="Ed-header"> EDUCATION</div>
      {/* <div className="Ed-header"> EDUCATION</div> */}
      <br/>
      {educationInfo}
      
    </div>
  );
};
