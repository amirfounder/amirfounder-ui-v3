import React from 'react';
import styles from './TeamGridMemberRecord.module.scss'
import TextInput from '../../../../inputs/text-input/TextInput';
import SelectInput from '../../../../inputs/select-input/SelectInput';
import { Constants } from '../../../../../utils/Constants';

const TeamGridMemberRecord = ({ member }) => {
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
        options={Constants.ATTENDANCE_VALUES}
      />
      <div>Null</div>
      <div>Null</div>
      <div>Null</div>
    </div>
  )
}

export default TeamGridMemberRecord
