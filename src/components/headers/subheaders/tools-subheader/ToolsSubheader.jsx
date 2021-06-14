import React from 'react'
import styles from '../../Headers.module.scss'
import { Link } from 'react-router-dom'
import { Constants } from '../../../../utils/Constants'

const ToolsSubheader = () => {
  return(
    <div className={styles.subheader}>
      <div className={styles.columnOne}>
        <Link className={styles.navLink} to={Constants.PATHS.TOOLS}>Tools</Link>
      </div>
      <div className={styles.columnTwo}>
        <Link className={styles.navLink} to={Constants.PATHS.TOOLS_STANDUP_TRACKER}>Standup Tracker</Link>
      </div>
    </div>
  )
}

export default ToolsSubheader
