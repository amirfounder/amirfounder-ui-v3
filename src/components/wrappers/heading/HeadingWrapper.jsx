import React from 'react';
import styles from './HeadingWrapper.module.scss'

const Heading = ({ level,  children }) => {
  return(
    // CHECK FOR UNDEFINED
    !level ? <h2 className={styles.headingTwo} >{children}</h2> :

    // CHECK IF LEVEL MATCHES H1 - H6
    level.toUpperCase() === 'H1' ? <h1 className={styles.headingOne} >{children}</h1> :
    level.toUpperCase() === 'H2' ? <h2 className={styles.headingTwo} >{children}</h2> :
    level.toUpperCase() === 'H3' ? <h3 className={styles.headingThree} >{children}</h3> :
    level.toUpperCase() === 'H4' ? <h4 className={styles.headingFour} >{children}</h4> :
    level.toUpperCase() === 'H5' ? <h5 className={styles.headingFive} >{children}</h5> :
    level.toUpperCase() === 'H6' ? <h6 className={styles.headingSix} >{children}</h6> :

    // DEFAULT ELSE
   <h2 className={styles.headingTwo} >{children}</h2>
  )
}

export default Heading;