import React from "react";
import  "./skills.css";


const CircleFull: React.FC<{ value: boolean }>
  = ({ value = true }) => {
  return <div className={value ? "skillCircle selected" : "skillCircle"} />;
};


type SkillProps = {
  name: string;
  level: number;
  
}

const Skill: React.FC<SkillProps> = ({ name, level, }) => {
  return (
    <div >
      <h4>{name}</h4>
      <div className="skills">
        {[1, 2, 3, 4, 5].map(i => (
          <CircleFull key={i} value={i <= level} />
        ))}
      </div>
    </div>
  );
}

export default Skill;
