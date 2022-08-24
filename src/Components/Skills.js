import React from "react";
import './Skills.css';

export const Skills = () => {
//   SKILLS
// ● Strong : PYTHON,MYSQL , HTML, JavaScript,
// ● Intermediate : React-js, MATLAB,CSS,MS-EXCEL
// ● Beginner : C++, Jav
const skill_list = [{
  id : 1,
  Name: 'Python',
  expertise_level: '80%',
},
{
  id : 2,
  Name: 'MySQL',
  expertise_level: '75%',
},
{
  id : 3,
  Name: 'HTML',
  expertise_level: '85%',
},
{
  id : 4,
  Name: 'JavaScript',
  expertise_level: '80%',
},
{
  id : 5,
  Name: 'CSS',
  expertise_level: '60%',
},
{
  id : 6,
  Name: 'React-JS',
  expertise_level: '65%',
},
{
  id : 7,
  Name: 'Matlab',
  expertise_level: '70%',
},
{
  id : 8,
  Name: 'MS-Excel',
  expertise_level: '60%',
},
{
  id : 9,
  Name: 'C++',
  expertise_level: '50%',
},
{
  id : 10,
  Name: 'MongoDB',
  expertise_level: '55%',
},
]

const skill_items = skill_list.map((item)=>{
  return(
     <div >
    <div className="skill-name">{item.Name}</div>
    <div className="expertise">
    <div className="expertise-level " style={{width:item.expertise_level}}>{item.expertise_level}</div>
    </div>
    </div>
  )
})
  return (
    <div className="container">
      <div className="header">SKILL</div>
      {skill_items}
    </div>
  );
};
