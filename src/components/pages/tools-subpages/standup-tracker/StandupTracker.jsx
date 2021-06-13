import React, { useEffect } from 'react';
import styles from './StandupTracker.module.scss'
import Heading from '../../../wrappers/heading/HeadingWrapper';
import PageWrapper from '../../../wrappers/page/PageWrapper';
import TeamGrid from './team-grid/TeamGrid';
import { useStandupTrackerContext } from '../../../../context/StandupTrackerContext';
import { getMembersFromCookie } from '../../../../utils/CookieService';
import Sidebar from './sidebar/Sidebar';
import { CSVDownload, CSVLink } from 'react-csv';
import { convertMembersToCSVData } from '../../../../utils/CSVHelper';
import DownloadMembersButton from './download-members-button/DownloadMembersButton';

const StandupTracker = () => {
  
  const {
    members, setMembers
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
        <div>
          <TeamGrid />
          <DownloadMembersButton />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </PageWrapper>
  )
}

export default StandupTracker