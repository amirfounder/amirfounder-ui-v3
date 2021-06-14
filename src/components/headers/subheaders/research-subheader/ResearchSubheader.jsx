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
      <div className={styles.columnTwo}>
        <Link className={styles.navLink} to={Constants.PATHS.RESEARCH_COMPUTER_VISION}>Computer Vision</Link>
      </div>
    </div>
  )
}

export default ResearchSubheader;
