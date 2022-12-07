import  { useState } from "react";
import Skill from "./Skill";




const SkillsList: React.FC  = () => {
  
  const [skills] = useState([
    { name: "Finish", level: 3 },
    { name: "English", level: 5 },
    { name: "Swedish", level: 3 },
    { name: "HTML5", level: 4 },
    { name: "CSS", level: 3 },
    { name: "JS", level: 4 },
    { name: "Typescript", level: 3 },
    { name: "React", level: 3 },
    { name: "Bootstrap", level: 4 },
    { name: "VS Code", level: 3 },
    { name: "C#", level: 3 },
    { name: "Unity Games", level: 4 },
    { name: "Python", level: 2 },

  ]);
  return (
    <div>
      {skills.map(skill => (
        <Skill name={skill.name} level={skill.level}  />
      ))}
    </div>
  );
};
export default SkillsList;
