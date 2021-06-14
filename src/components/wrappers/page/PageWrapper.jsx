import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Constants } from '../../../utils/Constants'
import pathNameDoesMatch from '../../../utils/PathNameMatchers'
import styles from './PageWrapper.module.scss'

const PageWrapper = ({ children, fullwidth=false }) => {

  const [pageHasSubheader, setPageHasSubheader] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (pathNameDoesMatch(location, Constants.REGEX.PATHNAMES.ABOUT) ||
      pathNameDoesMatch(location, Constants.REGEX.PATHNAMES.ABOUT) ||
      pathNameDoesMatch(location, Constants.REGEX.PATHNAMES.BLOG) ||
      pathNameDoesMatch(location, Constants.REGEX.PATHNAMES.PROJECTS) ||
      pathNameDoesMatch(location, Constants.REGEX.PATHNAMES.TOOLS) ||
      pathNameDoesMatch(location, Constants.REGEX.PATHNAMES.RESEARCH)
    ) {
      setPageHasSubheader(true)
    } else {
      setPageHasSubheader(false)
    }
  }, [location])

  return(
    <div
      className={
        `${styles.main}
        ${pageHasSubheader ? styles.subheaderHeight : styles.headerHeight}`
      }
    >
      <div className={!fullwidth ? styles.contained : styles.fullwidth}>
        {children}
      </div>
    </div>
  )
}

export default PageWrapper