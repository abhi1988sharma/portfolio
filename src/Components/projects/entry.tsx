import React from "react";
import { IProjectData } from "./projectData";
import styles from "./projects.module.scss"

const Entry: React.FC<IProjectData> = ({status, name, info}) => {
    return (
        <div className={styles.term}>
          <dt>
            <span className={styles.emoji} role="img" aria-label="Tense Biceps">
              {status}
            </span>
            <span>{name}</span>
          </dt>
          <dd>{info}</dd>
        </div>
      );
    }
    
    export default Entry;