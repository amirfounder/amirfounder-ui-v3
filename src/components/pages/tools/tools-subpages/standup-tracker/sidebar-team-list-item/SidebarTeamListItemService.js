import { setMembersInCookie } from "../../../../../../utils/CookieService"

export const deleteMember = (members, member) => {
  const newMembers = []
  for (const loopedMember of members) {
    if (loopedMember.id !== member.id) {
      newMembers.push({...loopedMember})
    }
  }
  setMembersInCookie(newMembers)
  return newMembers
}
