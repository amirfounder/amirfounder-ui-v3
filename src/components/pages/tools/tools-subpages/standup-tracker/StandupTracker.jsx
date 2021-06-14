import React, { useEffect } from 'react';
import styles from './StandupTracker.module.scss'
import HeadingWrapper from '../../../../wrappers/heading/HeadingWrapper';
import PageWrapper from '../../../../wrappers/page/PageWrapper';
import TeamGrid from './team-grid/TeamGrid';
import { useStandupTrackerContext } from '../../../../../context/StandupTrackerContext';
import { getMembersFromCookie } from '../../../../../utils/CookieService';
import Sidebar from './sidebar/Sidebar';
import DownloadMembersButton from './download-members-button/DownloadMembersButton';

const StandupTracker = () => {
  
  const {
    setMembers
  } = useStandupTrackerContext()

  useEffect(() => {
    setMembers(getMembersFromCookie())
  }, [setMembers])

  return(
    <PageWrapper fullwidth>
      <HeadingWrapper level="1">
        Standup Tracker
      </HeadingWrapper>
      <div className={styles.main}>
        <div>
          <TeamGrid />
          <DownloadMembersButton />
        </div>
        <Sidebar />
      </div>
    </PageWrapper>
  )
}

export default StandupTracker