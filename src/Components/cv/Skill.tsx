import React from "react";
import Style from "./skills.module.scss";


const CircleFull = ({ value = true }) => {
  return <div className={value ? "skillcircleselected" : "skillCircle"} />;
};

const Skill = ({ name, level }: {name: string; level: number}) => {
  return (
    <div className={Style.displaySkills}>
      <h4>{name}</h4>
      <div className={Style.skills}>
        {[1, 2, 3, 4, 5].map(i => (
          <CircleFull key={i} value={i <= level} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
