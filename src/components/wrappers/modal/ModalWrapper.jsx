import React from 'react';
import styles from './ModalWrapper.module.scss'

const ModalWrapper = ({ children, hidden }) => {
  return(
    <div className={styles.main} hidden={hidden}>
      <div className={styles.background}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ModalWrapper
