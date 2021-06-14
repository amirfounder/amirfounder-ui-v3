import React from 'react'
import { CSVLink } from 'react-csv'
import { useStandupTrackerContext } from '../../../../../../context/StandupTrackerContext'
import { convertMembersToCSVData } from '../../../../../../utils/CSVHelper'
import { generateTodaysDate } from '../../../../../../utils/Generator'

const DownloadMembersButton = () => {

  const {
    members
  } = useStandupTrackerContext()

  return(
    <>
      <CSVLink
        filename={`standup_data_${generateTodaysDate()}.csv`}
        data={convertMembersToCSVData(members)}
      >
        <button>
          Download Standup Data
        </button>
      </CSVLink>
    </>
  )
}

export default DownloadMembersButton