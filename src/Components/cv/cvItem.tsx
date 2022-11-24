
import React from "react";
import styles from "./cv.module.scss"

const CvItem: React.FC = () => {return(
    <div>
        <hr className={styles.ruler}></hr>
      <div className={styles.skills}>
        <h2 className={styles.heading2}>My Skills.</h2>
        <div className={styles.skillRow}>
          <img className={styles.SkillImage} src="" alt=""></img>
          <h3 className={styles.heading3}>Lorem & Ipsum</h3>
          <p className={styles.para}>Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.</p>
        </div>
       <div />
    </div>
    </div>
)};

export default CvItem;

