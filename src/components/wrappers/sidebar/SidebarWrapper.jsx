import React from 'react'
import styles from './SidebarWrapper.module.scss'

const SidebarWrapper = ({ children }) => {
  return(
    <div className={styles.main}>
      {children}
    </div>
  )
}

export default SidebarWrapper
