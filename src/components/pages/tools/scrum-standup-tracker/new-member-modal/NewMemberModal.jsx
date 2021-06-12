import React, { useEffect, useState } from 'react'
import styles from './NewMemberModal.module.scss'
import ModalWrapper from '../../../../wrappers/modal/ModalWrapper'
import TextInput from '../../../../inputs/text-input/TextInput'
import Heading from '../../../../wrappers/heading/HeadingWrapper'
import { useScrumStandupTrackerContext } from '../../../../../context/ScrumStandupTrackerContext'

const NewMemberModal = ({ show, setShow }) => {

  const {
    members, setMembers
  } = useScrumStandupTrackerContext()

  const [newMember, setNewMember] = useState({
    firstName: '',
    lastName: ''
  })

  const handleCancel = () => {
    setNewMember({firstName: '', lastName: ''})
    setShow(false)
  }

  const handleSubmit = () => {
    const tempMembers = JSON.parse(JSON.stringify(members))
    tempMembers.push({...newMember})
    setMembers(tempMembers)
    setNewMember({firstName: '', lastName: ''})
    setShow(false)
  }

  const handleInputChange = (e) => {
    const tempNewMember = {...newMember}
    tempNewMember[e.target.id] = e.target.value
    setNewMember(tempNewMember)
  }

  return(
    <ModalWrapper hidden={!show}>
      <div className={styles.main}>
        <Heading level>
          Add Members
        </Heading>
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
