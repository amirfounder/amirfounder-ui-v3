// COOKIE SERVICE

export const getAllCookies = () => {
  return document.cookie
}

export const getCookie = (field) => {
  const cookies = getAllCookies()
  const cookiesArr = cookies.split('; ')
  for (const cookie of cookiesArr) {
    if (cookie.includes(field)) {
      const targetCookieValue = cookie.replace(`${field}=`, '')
      return targetCookieValue
    }
  }
  return null
}

export const setCookie = (field, value, expires=new Date(9999, 0, 1).toUTCString()) => {
  document.cookie = `${field}=${value}; expires=${expires}`
}

// SCRUM STANDUP TRACKER

export const getMembersFromCookie = () => {
  return JSON.parse(getCookie('members'))
}

export const setMembersInCookie = (members) => {
  setCookie('members', JSON.stringify(members))
}
