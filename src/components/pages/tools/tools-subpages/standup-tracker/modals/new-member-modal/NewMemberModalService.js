import { Constants } from "../../../../../../../utils/Constants"
import { setMembersCookie } from "../../../../../../../utils/CookieService"
import { generateUniqueId } from "../../../../../../../utils/Generator"

export const createMember = (
  members,
  setMembers,
  newMember,
  setNewMember,
  setShow,
) => {
  const tempNewMember = {...newMember}
    let tempMembers = []
    if (members && members.length > 0) {
      tempMembers = JSON.parse(JSON.stringify(members))
    }

    // REPLACE BLANK NAMES WITH '-'
    if (!tempNewMember.firstName.trim()) {
      tempNewMember.firstName = "-"
    } 
    if (!tempNewMember.lastName.trim()) {
      tempNewMember.lastName = "-"
    }

    // CHECK AGAINST NAMING DUPLICATIONS
    for (const tempMember of tempMembers) {
      if (tempNewMember.firstName.trim() ===  tempMember.firstName.trim() &
        tempNewMember.lastName.trim() === tempMember.lastName.trim()
      ) {
        tempNewMember.lastName += " (Copy)"
      }
    }

    // GENERATE ARRAY OF IN USE IDS
    const takenIds = []
    for (const tempMember of tempMembers) {
      takenIds.push(tempMember.id)
    }

    // GENERATE UNIQUE ID
    let uniqueId = generateUniqueId(10, takenIds)
    tempNewMember.id = uniqueId

    // UPDATE MEMBERS
    tempMembers.push(tempNewMember)
    setMembers(tempMembers)
    setMembersCookie(tempMembers)

    // RESET MODAL
    setNewMember(Constants.OBJECTS.EMPTY_MEMBER_OBJECT)
    setShow(false)
}