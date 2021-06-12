import React from 'react'
import styles from './PageWrapper.module.scss'

const PageWrapper = ({ children, fullwidth=false }) => {
  return(
    <div className={styles.main}>
      <div className={!fullwidth ? styles.contained : styles.fullwidth}>
        {children}
      </div>
    </div>
  )
}

export default PageWrapper