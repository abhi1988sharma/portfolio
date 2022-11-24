/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./cv.module.scss"
import CvItem from "./cvItem";



const Cv: React.FC = () => {
  return (
   <div className={styles.cv}>
   <div className={styles.middleContainer}>
      <div className={styles.profile}>
        <img className={styles.profilepic} src="images/Abhishek Sharma.png" alt="Abhishek picture"></img>
        <h2 className={styles.heading2}>Hello.</h2>
        <p>Recently added a skill of 3D game designing & making a game using Unity Game Engine and C# scripting language. Also skilled in using Github. I have great understanding of computer fundamentals and Cisco networking. Completed PYTHON FOR DATA ANALYSIS training from THE SHORTCUT Helsinki. Developed skills in data analysis by using Python and also some basic codes in MySql workbench and shell. Experienced Marketing Specialist with a demonstrated history of working in the marketing and advertising & sales industry. Skilled in Business development and business Management, Customer Relationship Management, Market Research, Predictive Analytics, and Product Marketing. Strong marketing professional with a PGDM focused in Marketing from IILM, Greater Noida.

</p>
      </div>
      <CvItem />
      
      </div>
  </div>
  
  )
}

export default Cv;