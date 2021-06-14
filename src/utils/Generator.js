/**
 * Generates a random String with letters and numbers
 * @param {Integer} len Lenght of the string
 * @returns String - Random letters and numbers
 */
export const generateId = (len=10) => {
  // GENERATE INITIAL RANDOM ID
  let r = Math.random().toString(36).substring(2)
  
  // GENERATE UNTIL LENGTH IS EQUAL TO OR GREATER THAN DESIRED LENGTH
  while (r.length < len) {
    r = `${r}${Math.random().toString(36).substring(2)}`
  }

  // IF LENGHT IS GREATER THAN DESIRED LENGTH, SLICE
  if (r.length > len) {
    r = r.substring(0, len)
  }
  return r
}

export const generateUniqueId = (len=10, takenIds) => {
  while (true) {
    let id = generateId(len);
    if (!takenIds.includes(id)) {
      return id
    }
  }
}

export const generateTodaysDate = () => {
  const today = new Date();

  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  return mm + '/' + dd + '/' + yyyy;
}

export const generateTodaysCookieDate = () => {
  const today = new Date();

  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  return `${yyyy}${mm}${dd}`

}
