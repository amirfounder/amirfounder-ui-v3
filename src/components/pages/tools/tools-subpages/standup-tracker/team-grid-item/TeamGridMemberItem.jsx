import React from 'react';
import styles from './TeamGridMemberItem.module.scss'
import TextInput from '../../../../../inputs/text-input/TextInput';
import SelectInput from '../../../../../inputs/select-input/SelectInput';
import { Constants } from '../../../../../../utils/Constants';
import TextAreaInput from '../../../../../inputs/textarea-input/TextAreaInput';
import { updateMembers } from './TeamGridMemberItemService';
import { useStandupTrackerContext } from '../../../../../context/StandupTrackerContext';

const TeamGridMemberItem = ({ member }) => {

  const {
    members, setMembers
  } = useStandupTrackerContext()

  const handleInputChange = (e) => {
    updateMembers(members, setMembers, member, e.target.id, e.target.value)
  }

  return(
    <div className={styles.main}>
      <TextInput
        readOnly
        value={member.firstName}
      />
      <TextInput
        readOnly
        value={member.lastName}
      />
      <SelectInput
        id="attendance"
        options={Constants.ATTENDANCE_VALUES}
        onChange={handleInputChange}
        value={member.attendance}
      />
      <TextAreaInput
        id="last24Hours"
        onChange={handleInputChange}
        value={member.last24Hours}
      />
      <TextAreaInput
        id="next24Hours"
        onChange={handleInputChange}
        value={member.next24Hours}
      />
      <TextAreaInput
        id="blockers"
        onChange={handleInputChange}
        value={member.blockers}
      />
    </div>
  )
}

export default TeamGridMemberItem
