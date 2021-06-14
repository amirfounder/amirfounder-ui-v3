import React from 'react'
import styles from '../../Headers.module.scss'
import { Link } from 'react-router-dom'
import { Constants } from '../../../../utils/Constants'

const AboutSubheader = () => {
  return(
    <div className={styles.subheader}>
      <div className={styles.columnOne}>
        <Link className={styles.navLink} to={Constants.PATHS.ABOUT}>About</Link>
      </div>
      <diiv className={styles.columnTwo}>
        <Link className={styles.navLink} to={Constants.PATHS.ABOUT_VISION}>Vision</Link>
        <Link className={styles.navLink} to={Constants.PATHS.ABOUT_RESUME}>Resume</Link>
        <Link className={styles.navLink} to={Constants.PATHS.ABOUT_INTERESTS}>Interests</Link>
      </diiv>
    </div>
  )
}

export default AboutSubheader;
