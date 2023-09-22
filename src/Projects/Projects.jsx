import React from "react";

// import styles from "./ProjectCard.module.css";
import styles from "../Projects/Projects.module.css";
import { ProjectCard } from "./ProjectCard";
import projects from "../data/projects.json";

export const Projects = () => {
    return (
      <section className={styles.container} id="projects">
        <h2 className={styles.title}>Activitys</h2>
        <div className={styles.projects}>
          {projects.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
      </section>
    );
  };
