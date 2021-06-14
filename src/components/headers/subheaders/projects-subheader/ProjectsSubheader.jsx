import React from 'react'
import styles from '../../Headers.module.scss'
import { Link } from 'react-router-dom'
import { Constants } from '../../../../utils/Constants'

const ProjectsSubheader = () => {
  return(
    <div className={styles.subheader}>
      <div className={styles.columnOne}>
        <Link className={styles.navLink} to={Constants.PATHS.PROJECTS}>Projects</Link>
      </div>
      <div className={styles.columnTwo}>

      </div>
    </div>
  )
}

export default ProjectsSubheader;
