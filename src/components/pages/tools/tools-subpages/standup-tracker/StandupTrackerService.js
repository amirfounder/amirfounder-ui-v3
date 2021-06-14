import { getMembersCookie } from "../../../../../utils/CookieService";
import { generateTodaysCookieDate } from "../../../../../utils/Generator"

export const resetMembersData = (members) => {
  const tempMembers = [...members]
  for (const member of tempMembers) {
    member.attendance = 'Present';
    member.last24Hours = '';
    member.next24Hours = '';
    member.blockers = '';
  }
  return tempMembers
}

export const setMembersData = (setMembers) => {
  let members;
  const cookie = getMembersCookie()
  if (cookie) {
    members = getMembersCookie().members
    members = (Number(cookie.date) < Number(generateTodaysCookieDate())) && resetMembersData(members)
  } else {
    members = []
  }
  setMembers(members)
}