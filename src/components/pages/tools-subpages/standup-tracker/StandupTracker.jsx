import React, { useEffect } from 'react';
import styles from './StandupTracker.module.scss'
import Heading from '../../../wrappers/heading/HeadingWrapper';
import PageWrapper from '../../../wrappers/page/PageWrapper';
import TeamGrid from './team-grid/TeamGrid';
import { useStandupTrackerContext } from '../../../../context/StandupTrackerContext';
import { getMembersFromCookie } from '../../../../utils/CookieService';
import Sidebar from './sidebar/Sidebar';

const StandupTracker = () => {
  
  const {
    setMembers
  } = useStandupTrackerContext()

  useEffect(() => {
    setMembers(getMembersFromCookie())
  }, [setMembers])

  return(
    <PageWrapper fullwidth>
      <Heading level="1">
        Standup Tracker
      </Heading>
      <div className={styles.main}>
        <TeamGrid />
        <Sidebar />
      </div>
    </PageWrapper>
  )
}

export default StandupTracker