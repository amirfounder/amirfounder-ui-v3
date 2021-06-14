import { setMembersCookie } from "../../../../../../utils/CookieService"

export const updateMembers = (members, setMembers, member, key, value) => {
  const tempMembers = [...members]
  for (const tempMember of tempMembers) {
    if (tempMember.id === member.id) {
      tempMember[key] = value
      break
    }
  }
  setMembersCookie(tempMembers)
  setMembers(tempMembers)
}