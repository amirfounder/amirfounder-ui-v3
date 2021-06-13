import React from 'react';
import styles from './TeamGridMemberRecord.module.scss'
import TextInput from '../../../../inputs/text-input/TextInput';
import SelectInput from '../../../../inputs/select-input/SelectInput';
import { Constants } from '../../../../../utils/Constants';
import TextAreaInput from '../../../../inputs/textarea-input/TextAreaInput';

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
      <TextAreaInput />
      <TextAreaInput />
      <TextAreaInput />
    </div>
  )
}

export default TeamGridMemberRecord
