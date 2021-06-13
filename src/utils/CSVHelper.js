import { Constants } from "./Constants";

export const convertMembersToCSVData = (members) => {
  const csvData = []
  csvData.push(Object.keys(Constants.OBJECTS.EMPTY_MEMBER_OBJECT))
  members.forEach((member) => csvData.push(Object.values(member)))
  return csvData
}