import React, { useState, useContext, createContext } from 'react'

const StandupTrackerContext = createContext()

const StandupTrackerProvider = ({ children }) => {

  const [members, setMembers] = useState([])

  return(
    <StandupTrackerContext.Provider
      value={{
        members, setMembers
      }}
    >
      {children}
    </StandupTrackerContext.Provider>
  )
}

const useStandupTrackerContext = () => {
  const context = useContext(StandupTrackerContext)
  if (!context) {
    throw new Error("Problem claling useStandupTrackerContext")
  }
  return context;
}

export { StandupTrackerProvider, useStandupTrackerContext }
