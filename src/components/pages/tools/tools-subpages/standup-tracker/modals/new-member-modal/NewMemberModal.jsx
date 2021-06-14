import React, { useState } from 'react'
import styles from './NewMemberModal.module.scss'
import ModalWrapper from '../../../../../../wrappers/modal/ModalWrapper'
import TextInput from '../../../../../../inputs/text-input/TextInput'
import HeadingWrapper from '../../../../../../wrappers/heading/HeadingWrapper'
import { useStandupTrackerContext } from '../../../../../../../context/StandupTrackerContext'
import { createMember } from './NewMemberModalService'
import { Constants } from '../../../../../../../utils/Constants'

const NewMemberModal = ({ show, setShow }) => {

  const {
    members, setMembers
  } = useStandupTrackerContext()

  const [newMember, setNewMember] = useState(Constants.OBJECTS.EMPTY_MEMBER_OBJECT)

  const handleCancel = () => {
    setNewMember(Constants.OBJECTS.EMPTY_MEMBER_OBJECT)
    setShow(false)
  }

  const handleSubmit = () => {
    createMember(
      members,
      setMembers,
      newMember,
      setNewMember,
      setShow
    )
  }

  const handleInputChange = (e) => {
    const tempNewMember = {...newMember}
    tempNewMember[e.target.id] = e.target.value
    setNewMember(tempNewMember)
  }

  return(
    <ModalWrapper hidden={!show}>
      <div className={styles.main}>
        <HeadingWrapper level>
          Add Members
        </HeadingWrapper>
        <div className={styles.newMembers}>
          <div className={styles.newMember}>
            <TextInput
              id="firstName"
              placeholder="First Name"
              value={newMember.firstName}
              onChange={handleInputChange}
            />
            <TextInput
              id="lastName"
              placeholder="Last Name"
              value={newMember.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </ModalWrapper>
  )
}

export default NewMemberModal
