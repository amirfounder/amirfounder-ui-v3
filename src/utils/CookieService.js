
// COOKIE SERVICE

import { Constants } from "./Constants"
import { generateTodaysCookieDate } from "./Generator"

export const getAllCookies = () => {
  return document.cookie
}

export const getCookie = (name) => {
  const cookies = getAllCookies()
  const cookiesArr = cookies.split('; ')
  for (const cookie of cookiesArr) {
    if (cookie.includes(name)) {
      const targetCookieValue = cookie.replace(`${name}=`, '')
      return targetCookieValue
    }
  }
  return null
}

export const setCookie = (name, value, expires=new Date(9999, 0, 1).toUTCString()) => {
  document.cookie = `${name}=${value}; expires=${expires}; path=/`
}

// SCRUM STANDUP TRACKER

export const getMembersCookie = () => JSON.parse(getCookie(Constants.COOKIE_NAMES.MEMBERS)) 

export const setMembersCookie = (members, date=generateTodaysCookieDate()) => {
  setCookie(Constants.COOKIE_NAMES.MEMBERS, JSON.stringify({date, members}))
}
