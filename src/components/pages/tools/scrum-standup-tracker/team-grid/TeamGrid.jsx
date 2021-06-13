import React from 'react';
import { useScrumStandupTrackerContext } from '../../../../../context/ScrumStandupTrackerContext';
import styles from './TeamGrid.module.scss'
import TeamGridMemberRecord from '../team-grid-record/TeamGridMemberRecord';

const TeamGrid = () => {

  const {
    members
  } = useScrumStandupTrackerContext()

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
          <TeamGridMemberRecord member={member}/>
        ))}
      </div>
    </div>
  )
}

export default TeamGrid
