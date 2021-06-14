import React, { useState } from 'react';
import SidebarWrapper from '../../../../../wrappers/sidebar/SidebarWrapper';
import SidebarTeamList from '../sidebar-team-list/SidebarTeamList';
import HeadingWrapper from '../../../../../wrappers/heading/HeadingWrapper';
import { setMembersCookie } from '../../../../../../utils/CookieService';
import NewMemberModal from '../modals/new-member-modal/NewMemberModal';
import { useStandupTrackerContext } from '../../../../../../context/StandupTrackerContext';
import styles from './Sidebar.module.scss'

const Sidebar = () => {

  const {
    setMembers
  } = useStandupTrackerContext()

  const [newMemberShow, setNewMemberModalShow] = useState(false)

  const handleAddMemberClick = () => setNewMemberModalShow(true)

  const handleDeleteAllMembersClick = () => {
    setMembersCookie([])
    setMembers([])
  }

  return(
    <div>
      <SidebarWrapper>
        <HeadingWrapper level="2">
          Manage Your Team
        </HeadingWrapper>
        <SidebarTeamList />
        <div className={styles.buttons}>
          <button onClick={handleAddMemberClick}>Add Member</button>
          <button onClick={handleDeleteAllMembersClick}>Delete All</button>
        </div>
        <NewMemberModal show={newMemberShow} setShow={setNewMemberModalShow}/>
      </SidebarWrapper>
    </div>
  )
}

export default Sidebar
