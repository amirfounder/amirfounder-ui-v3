import React from 'react';
import { useStandupTrackerContext } from '../../../../../../context/StandupTrackerContext';
import SidebarTeamListItem from '../sidebar-team-list-item/SidebarTeamListItem';
import styles from './SidebarTeamList.module.scss'

const SidebarTeamList = () => {
  const {
    members
  } = useStandupTrackerContext()
  
  return(
    <div className={styles.main}>
      {members && members.map((member) => (
        <SidebarTeamListItem member={member} key={member.id}/>
      ))}
    </div>
  )
}

export default SidebarTeamList