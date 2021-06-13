import React from 'react'
import styles from '../../Headers.module.scss'
import { Link } from 'react-router-dom'

const ResearchSubheader = () => {
  return(
    <div className={styles.subheader}>
      <div className={styles.columnOne}>
        Research
      </div>
      <diiv className={styles.columnTwo}>
        <Link className={styles.navLink}>Computer Vision (Coming Soon)</Link>
      </diiv>
    </div>
  )
}

export default ResearchSubheader;
