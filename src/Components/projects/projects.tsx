import React from "react";
import Entry from "./entry";
import { projectsData } from "./projectData";
import styles from "./projects.module.scss"

const Projects: React.FC = () => {
    return (
        <div>
          <h1>
            <span>Projects Completed</span>
          </h1>
          <dl className={styles.dictionary}>
            {projectsData && projectsData.map(projectTerm => (
              <Entry
                {...projectTerm}
              /> ))}
          </dl>
        </div>
      );
    }

export default Projects;
