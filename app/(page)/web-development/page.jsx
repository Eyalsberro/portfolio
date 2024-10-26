import React from 'react'
import styles from "./page.module.css";
import { Projects } from './projects';
import Link from 'next/link';
import Header from '../Header';


export default function page() {
  return (
    <>
      <Header />
      <div className={styles.projects}>
        {Projects.map((project) => (
          <div className={styles.projectdiv} key={project}>
            <Link href={project.link} target='_blank'>
              <img
                src={project.image}
                alt={project.title}
              />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <button>VIEW</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
