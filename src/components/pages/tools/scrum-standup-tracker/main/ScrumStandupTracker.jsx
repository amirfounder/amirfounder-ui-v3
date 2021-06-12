import React, { useState } from 'react';
import styles from './ScrumStandupTracker.module.scss'
import Heading from '../../../../wrappers/heading/HeadingWrapper';
import PageWrapper from '../../../../wrappers/page/PageWrapper';
import SidebarWrapper from '../../../../wrappers/sidebar/SidebarWrapper';
import { useScrumStandupTrackerContext } from '../../../../../context/ScrumStandupTrackerContext';
import TeamGrid from '../team-grid/TeamGrid';
import NewMemberModal from '../new-member-modal/NewMemberModal';

const ScrumStandupTracker = () => {
  
  const [show, setShow] = useState(false)

  return(
    <PageWrapper fullwidth>
      <Heading level="1">
        Scrum Standup Tracker
      </Heading>
      <div className={styles.main}>

        {/* MAIN GRID */}

        <div>
          <TeamGrid />
        </div>

        {/* SIDEBAR */}
        <div>
          <SidebarWrapper>
            <Heading level="3">Manage Your Team</Heading>
            <div>
              <button onClick={() => setShow((prevValue) => !prevValue)}>
                Add Member
              </button>
            </div>
            <NewMemberModal show={show} setShow={setShow}/>
          </SidebarWrapper>
        </div>
      </div>
    </PageWrapper>
  )
}

export default ScrumStandupTracker