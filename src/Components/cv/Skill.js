import React from "react";
import "./skills.css";


const CircleFull = ({ value = true }) => {
  return <div className={value ? "skill-circle selected" : "skill-circle"} />;
};
const Skill = ({ name, level }) => {
  return (
    <div className="display-skills">
      <h4>{name}</h4>
      <div className="skills">
        {[1, 2, 3, 4, 5].map(i => (
          <CircleFull key={i} value={i <= level} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
