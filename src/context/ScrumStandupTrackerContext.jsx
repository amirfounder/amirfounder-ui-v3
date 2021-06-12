import React, { useState, useContext, createContext } from 'react'

const ScrumStandupTrackerContext = createContext()

const ScrumStandupTrackerProvider = ({ children }) => {

  const [members, setMembers] = useState([])

  return(
    <ScrumStandupTrackerContext.Provider
      value={{
        members, setMembers
      }}
    >
      {children}
    </ScrumStandupTrackerContext.Provider>
  )
}

const useScrumStandupTrackerContext = () => {
  const context = useContext(ScrumStandupTrackerContext)
  if (!context) {
    throw new Error("Problem claling useScrumStandupTrackerContext")
  }
  return context;
}

export { ScrumStandupTrackerProvider, useScrumStandupTrackerContext }
