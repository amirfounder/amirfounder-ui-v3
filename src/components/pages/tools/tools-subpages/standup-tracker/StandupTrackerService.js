import { getMembersCookie } from "../../../../../utils/CookieService";
import { generateTodaysCookieDate } from "../../../../../utils/Generator"

export const resetMembersData = (members) => {
  const tempMembers = [...members]
  for (const member of tempMembers) {
    member.attendance = '';
    member.last24Hours = '';
    member.next24Hours = '';
    member.blockers = '';
  }
  return tempMembers
}

export const setMembersData = (setMembers) => {
  const cookie = getMembersCookie()
  const todaysCookieDate = generateTodaysCookieDate()
  let members = getMembersCookie().members
  if (Number(cookie.date) < Number(todaysCookieDate)) {
    members = resetMembersData(members);
  }
  setMembers(members)
}