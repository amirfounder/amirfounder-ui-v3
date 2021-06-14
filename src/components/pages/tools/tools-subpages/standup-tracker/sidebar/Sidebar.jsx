import React, { useState } from 'react';
import SidebarWrapper from '../../../../../wrappers/sidebar/SidebarWrapper';
import SidebarTeamList from '../sidebar-team-list/SidebarTeamList';
import HeadingWrapper from '../../../../../wrappers/heading/HeadingWrapper';
import { setMembersInCookie } from '../../../../../../utils/CookieService';
import NewMemberModal from '../modals/new-member-modal/NewMemberModal';
import { useStandupTrackerContext } from '../../../../../../context/StandupTrackerContext';

const Sidebar = () => {

  const {
    setMembers
  } = useStandupTrackerContext()

  const [newMemberShow, setNewMemberModalShow] = useState(false)

  const handleAddMemberClick = () => setNewMemberModalShow(true)

  const handleDeleteAllMembersClick = () => {
    setMembersInCookie([])
    setMembers([])
  }

  return(
    <div>
      <SidebarWrapper>
        <HeadingWrapper level="2">
          Manage Your Team
        </HeadingWrapper>
        <SidebarTeamList />
        <button onClick={handleAddMemberClick}>Add Member</button><br />
        <button onClick={handleDeleteAllMembersClick}>Delete All</button>
        <NewMemberModal show={newMemberShow} setShow={setNewMemberModalShow}/>
      </SidebarWrapper>
    </div>
  )
}

export default Sidebar
