import React from 'react';
import { Link } from 'react-router-dom'
import styles from '../Headers.module.scss'

const Header = () => {
  return(
    <div className={styles.header}>
      <div className={styles.columnOne}>
        <Link className={styles.wordmark} to="/">
          <span className={styles.amir}>Amir </span>
          <span className={styles.sharapov}>Sharapov</span>
        </Link>
      </div>
      <div className={styles.columnTwo}>
        <Link className={styles.navLink} to="/about">About</Link>
        <Link className={styles.navLink} to="/blog">Blog</Link>
        <Link className={styles.navLink} to="/learn">Learn</Link>
        <Link className={styles.navLink} to="/projects">Projects</Link>
        <Link className={styles.navLink} to="/research">Research</Link>
        <Link className={styles.navLink} to="/tools">Tools</Link>
      </div>
    </div>
  )
}

export default Header;