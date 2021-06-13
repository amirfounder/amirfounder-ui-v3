import React from 'react';

const SidebarTeamListItem = ({ member }) => {
  return(
    <div>{member.firstName} {member.lastName}</div>
  )
}

export default SidebarTeamListItem