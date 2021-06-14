import React from 'react';
import PageWrapper from '../../wrappers/page/PageWrapper';
import Heading from '../../wrappers/heading/HeadingWrapper';
import styles from './Home.module.scss'

const Home = () => {
  return(
    <PageWrapper>
      <div className={styles.container}>
        <Heading level="1" image="">
          My Name Is Amir and I Am Curious About Our World.
        </Heading>
      </div>
    </PageWrapper>
  )
}

export default Home;
