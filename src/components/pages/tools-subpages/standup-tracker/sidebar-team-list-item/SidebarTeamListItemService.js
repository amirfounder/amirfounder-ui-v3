import { setMembersInCookie } from "../../../../../utils/CookieService"

export const deleteMember = (members, member) => {
  const newMembers = []
  for (const loopedMember of members) {
    if (loopedMember.firstName !== member.firstName &&
      loopedMember.lastName !== member.lastName
    ) {
      newMembers.push({...loopedMember})
    }
  }
  setMembersInCookie(newMembers)
  return newMembers
}