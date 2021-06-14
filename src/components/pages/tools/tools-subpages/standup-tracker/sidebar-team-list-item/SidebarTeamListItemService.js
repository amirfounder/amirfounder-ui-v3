import { setMembersCookie } from "../../../../../../utils/CookieService"

export const deleteMember = (members, member) => {
  const newMembers = []
  for (const loopedMember of members) {
    if (loopedMember.id !== member.id) {
      newMembers.push({...loopedMember})
    }
  }
  setMembersCookie(newMembers)
  return newMembers
}
