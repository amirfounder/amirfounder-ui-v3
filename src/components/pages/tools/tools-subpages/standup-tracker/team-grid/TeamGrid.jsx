import React from 'react';
import { useStandupTrackerContext } from '../../../../../../context/StandupTrackerContext';
import styles from './TeamGrid.module.scss'
import TeamGridMemberItem from '../team-grid-item/TeamGridMemberItem';

const TeamGrid = () => {

  const {
    members
  } = useStandupTrackerContext()

  return(
    <div className={styles.main}>
      <div className={styles.header}>
        <div>First Name</div>
        <div>Last Name</div>
        <div>Attendance</div>
        <div>Last 24 Hours</div>
        <div>Next 24 Hours</div>
        <div>Blockers</div>
      </div>
      <div className={styles.content}>
        {members && members.map((member) => (
          <TeamGridMemberItem member={member} key={`${member.id}`}/>
        ))}
      </div>
    </div>
  )
}

export default TeamGrid
