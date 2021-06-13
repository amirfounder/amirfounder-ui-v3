import React, { useEffect, useState } from 'react';
import styles from './ScrumStandupTracker.module.scss'
import Heading from '../../../../wrappers/heading/HeadingWrapper';
import PageWrapper from '../../../../wrappers/page/PageWrapper';
import SidebarWrapper from '../../../../wrappers/sidebar/SidebarWrapper';
import TeamGrid from '../team-grid/TeamGrid';
import NewMemberModal from '../modals/new-member-modal/NewMemberModal';
import { useScrumStandupTrackerContext } from '../../../../../context/ScrumStandupTrackerContext';
import { getMembersFromCookie, setMembersInCookie } from '../../../../../utils/CookieService';

const ScrumStandupTracker = () => {
  
  const {
    members, setMembers
  } = useScrumStandupTrackerContext()

  const [show, setShow] = useState(false)

  const handleAddMemberClick = () => setShow(true)

  const handleDeleteAllMembersClick = () => {
    setMembersInCookie([])
    setMembers([])
  }

  // const gioFunction = useMemo(() => {
  //   setMembers(getMembersFromCookie())
  // }, [])

  useEffect(() => {
    setMembers(getMembersFromCookie())
  }, [setMembers])

  return(
    <PageWrapper fullwidth>
      <Heading level="1">
        Scrum Standup Tracker
      </Heading>
      <div className={styles.main}>
        <TeamGrid />
        <div>
          <SidebarWrapper>
            <Heading level="3">Manage Your Team</Heading>
            {members && members.map((member, index) => (
              <div key={`${member}-${index}`}>
                {member.firstName} {member.lastName}
              </div>
            ))}
            <div>
              <button onClick={handleAddMemberClick}>Add Member</button>
              <button onClick={handleDeleteAllMembersClick}>Delete All Members</button>
            </div>
          </SidebarWrapper>
          <NewMemberModal show={show} setShow={setShow}/>
        </div>
      </div>
    </PageWrapper>
  )
}

export default ScrumStandupTracker