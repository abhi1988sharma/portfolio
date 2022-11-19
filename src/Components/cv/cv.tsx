/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./cv.module.scss"



const Cv: React.FC = () => {
  return (
   <div className={styles.cv}>
   <div className={styles.middleContainer}>
      <div className={styles.profile}>
        <img className={styles.profilepic} src="images/Abhishek Sharma.png" alt="Abhishek picture"></img>
        <h2 className={styles.heading2}>Hello.</h2>
        <p>Lorem ipsum dolor sit amet, vitae volutpat, dui conubia, dolor urna. Non auctor, montes nulla distinctio.</p>
      </div>
      <hr className={styles.ruler}></hr>
      <div className={styles.skills}>
        <h2 className={styles.heading2}>My Skills.</h2>
        <div className={styles.skillRow}>
          <img className={styles.SkillImage} src="https://cdn-icons-png.flaticon.com/512/3080/3080443.png" alt="Skill picture"></img>
          <h3 className={styles.heading3}>Lorem & Ipsum</h3>
          <p className={styles.para}>Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.</p>
        </div>
       
      </div>
  </div>
  </div>
  
  )
}

export default Cv;