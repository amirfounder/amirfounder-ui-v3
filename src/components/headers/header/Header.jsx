import React from 'react';
import { Link } from 'react-router-dom'
import { Constants } from '../../../utils/Constants';
import styles from '../Headers.module.scss'

const Header = () => {
  return(
    <div className={styles.header}>
      <div className={styles.columnOne}>
        <Link className={styles.wordmark} to={Constants.PATHS.HOME}>
          <span className={styles.amir}>Amir </span>
          <span className={styles.sharapov}>Sharapov</span>
        </Link>
      </div>
      <div className={styles.columnTwo}>
        <Link className={styles.navLink} to={Constants.PATHS.ABOUT}>About</Link>
        <Link className={styles.navLink} to={Constants.PATHS.BLOG}>Blog</Link>
        <Link className={styles.navLink} to={Constants.PATHS.PROJECTS}>Projects</Link>
        <Link className={styles.navLink} to={Constants.PATHS.RESEARCH}>Research</Link>
        <Link className={styles.navLink} to={Constants.PATHS.TOOLS}>Tools</Link>
      </div>
    </div>
  )
}

export default Header;