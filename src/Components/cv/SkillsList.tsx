import  React, { useState } from "react";
import Skill from "./Skill";




const SkillsList: React.FC  = () => {
  
  const [skills] = useState([
    { name: "React", level: 4 },
    { name: "Javascript", level: 4 },
    { name: "Typescript", level: 3 },
    { name: "HTML5", level: 5 },
    { name: "CSS", level: 4 },
    { name: "Bootstrap", level: 4 },
    { name: "VS Code", level: 4 },
    { name: "C#", level: 3 },
    { name: "Unity Games", level: 4 },
    { name: "Python", level: 2 },
    { name: "Finnish", level: 3 },
    { name: "English", level: 5 }

  ]);
  return (
    <div>
      {skills.map(skill => (
        <Skill name={skill.name} level={skill.level}   />
      ))}
    </div>
  );
};
export default SkillsList;
