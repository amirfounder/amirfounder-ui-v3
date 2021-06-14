import React from 'react';
import { useStandupTrackerContext } from '../../../../../../context/StandupTrackerContext';
import styles from './SidebarTeamListItem.module.scss'
import { deleteMember } from './SidebarTeamListItemService';
import { VscTrash } from 'react-icons/vsc'
import { BsPencil } from 'react-icons/bs'

const SidebarTeamListItem = ({ member }) => {

  const {
    members, setMembers
  } = useStandupTrackerContext()

  const handleMemberDelete = () => {
    setMembers(deleteMember(members, member))
  }

  const handleMemberEdit = () => {
    console.log('clicked the edit')
  }

  return(
    <div className={styles.main}>
      <div className={styles.memberInfo}>
        {member.firstName} {member.lastName}
      </div>
      <div className={styles.memberActions}>
        <span className={styles.deleteIcon} onClick={handleMemberDelete}>
          <VscTrash />
        </span>
        {/* <span className={styles.editIcon} onClick={handleMemberEdit}>
          <BsPencil />
        </span> */}
      </div>
    </div>
  )
}

export default SidebarTeamListItem