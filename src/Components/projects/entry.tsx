import React from "react";
import { IProjectData } from "./projectData";
import styles from "./projects.module.scss"

const Entry: React.FC<IProjectData> = ({status, name, info, url }) => {
    return (
        <div className={styles.term}>
          <dt>
            <span className={styles.emoji} role="img" aria-label="Tense Biceps">
              {status}
            </span>
            <span>{name}</span>
          </dt>
          <dd>{info}</dd>
          <a href={url}><img className={styles.mediaLogo} src="images/github.png" alt= "github"></img></a>
        </div>
      );
    }
  
    export default Entry;