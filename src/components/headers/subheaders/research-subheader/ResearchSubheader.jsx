import React from 'react'
import styles from '../../Headers.module.scss'
import { Link } from 'react-router-dom'
import { Constants } from '../../../../utils/Constants'

const ResearchSubheader = () => {
  return(
    <div className={styles.subheader}>
      <div className={styles.columnOne}>
        <Link className={styles.navLink} to={Constants.PATHS.RESEARCH} >Research</Link>
      </div>
      <diiv className={styles.columnTwo}>
        <Link className={styles.navLink} to="/">Computer Vision (Coming Soon)</Link>
      </diiv>
    </div>
  )
}

export default ResearchSubheader;
