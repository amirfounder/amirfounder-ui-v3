import React from 'react';
import { useStandupTrackerContext } from '../../../../../context/StandupTrackerContext';
import styles from './TeamGrid.module.scss'
import TeamGridMemberRecord from '../team-grid-record/TeamGridMemberRecord';

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
        {members && members.map((member, index) => (
          <TeamGridMemberRecord member={member} key={`${member}-${index}`}/>
        ))}
      </div>
    </div>
  )
}

export default TeamGrid
