import React from 'react'
import styles from '../../Headers.module.scss'
import { Link } from 'react-router-dom'
import { Constants } from '../../../../utils/Constants'

const BlogSubheader = () => {
  return(
    <div className={styles.subheader}>
      <div className={styles.columnOne}>
        <Link className={styles.navLink} to={Constants.PATHS.BLOG}>Blog</Link>
      </div>
      <diiv className={styles.columnTwo}>

      </diiv>
    </div>
  )
}

export default BlogSubheader;
