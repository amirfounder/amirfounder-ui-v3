import React, { useState } from 'react'
import styles from './NewMemberModal.module.scss'
import ModalWrapper from '../../../../../wrappers/modal/ModalWrapper'
import TextInput from '../../../../../inputs/text-input/TextInput'
import Heading from '../../../../../wrappers/heading/HeadingWrapper'
import { useStandupTrackerContext } from '../../../../../context/StandupTrackerContext'
import { setMembersInCookie } from '../../../../../../utils/CookieService'

const NewMemberModal = ({ show, setShow }) => {

  const {
    members, setMembers
  } = useStandupTrackerContext()

  const [newMember, setNewMember] = useState({
    firstName: '',
    lastName: ''
  })

  const handleCancel = () => {
    setNewMember({firstName: '', lastName: ''})
    setShow(false)
  }

  const handleSubmit = () => {
    const tempNewMember = {...newMember}
    let tempMembers = []
    if (members && members.length > 0) {
      tempMembers = JSON.parse(JSON.stringify(members))
    }

    // CHECK TO MAKE SURE FIRST AND LAST NAME ARE NOT BLANK
    if (!tempNewMember.firstName) {
      tempNewMember.firstName = "N/A"
    } 
    if (!tempNewMember.lastName) {
      tempNewMember.lastName = "N/A"
    }

    // CHECK AGAINST DUPLICATES
    for (const member of tempMembers) {
      if (tempNewMember.firstName ===  member.firstName &
        tempNewMember.lastName === member.lastName
      ) {
        tempNewMember.lastName += " (Copy)"
      }
    }

    // UPDATE MEMBERS
    tempMembers.push(tempNewMember)
    setMembers(tempMembers)
    setMembersInCookie(tempMembers)

    // RESET MODAL
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
