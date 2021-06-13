import React, { useState } from 'react';
import SidebarWrapper from '../../../../wrappers/sidebar/SidebarWrapper';
import SidebarTeamList from '../sidebar-team-list/SidebarTeamList';
import Heading from '../../../../wrappers/heading/HeadingWrapper';
import { setMembersInCookie } from '../../../../../utils/CookieService';
import NewMemberModal from '../modals/new-member-modal/NewMemberModal';
import { useStandupTrackerContext } from '../../../../../context/StandupTrackerContext';

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
        <Heading level="2">
          Manage Your Team
        </Heading>
        <SidebarTeamList />
        <div>
          <button onClick={handleAddMemberClick}>Add Member</button>
          <button onClick={handleDeleteAllMembersClick}>Delete All Members</button>
        </div>
        <NewMemberModal show={newMemberShow} setShow={setNewMemberModalShow}/>
      </SidebarWrapper>
    </div>
  )
}

export default Sidebar
