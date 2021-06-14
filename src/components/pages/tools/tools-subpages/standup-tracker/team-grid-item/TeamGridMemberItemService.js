import { setMembersInCookie } from "../../../../../../utils/CookieService"

export const updateMembers = (members, setMembers, member, key, value) => {
  const tempMembers = [...members]
  for (const tempMember of tempMembers) {
    if (tempMember.id === member.id) {
      tempMember[key] = value
      break
    }
  }
  setMembersInCookie(tempMembers)
  setMembers(tempMembers)
}