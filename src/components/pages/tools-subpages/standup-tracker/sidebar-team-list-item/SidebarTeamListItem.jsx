import React from 'react';
import { useStandupTrackerContext } from '../../../../../context/StandupTrackerContext';
import styles from './SidebarTeamListItem.module.scss'
import { deleteMember } from './SidebarTeamListItemService';

const SidebarTeamListItem = ({ member }) => {

  const {
    members, setMembers
  } = useStandupTrackerContext()

  const handleMemberDelete = () => {
    setMembers(deleteMember(members, member))
  }
  
  return(
    <div className={styles.main}>
      <div className={styles.memberInfo}>
        {member.firstName} {member.lastName}
      </div>
      <div className={styles.memberActions}>
        <span onClick={handleMemberDelete}>X</span>
      </div>
    </div>
  )
}

export default SidebarTeamListItem