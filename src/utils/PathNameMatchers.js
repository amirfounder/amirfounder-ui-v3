const pathNameDoesMatch = (location, regex) => {
  return (location.pathname.match(regex))
}

export default pathNameDoesMatch;