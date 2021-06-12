import React from 'react'
import styles from '../Headers.module.scss'
import { Link } from 'react-router-dom'

const ToolsSubheader = () => {
  return(
    <div className={styles.subheader}>
      <div className={styles.columnOne}>
        Tools:
      </div>
      <div className={styles.columnTwo}>
        <Link className={styles.navLink}>Scrum Tools</Link>
      </div>
    </div>
  )
}

export default ToolsSubheader
