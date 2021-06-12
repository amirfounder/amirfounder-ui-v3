import React from 'react'
import styles from './PageWrapper.module.scss'

const PageWrapper = ({ children }) => {
  return(
    <div className={styles.main}>
      <div>
        {children}
      </div>
    </div>
  )
}

export default PageWrapper