import { getTableDocumentsRequest, getTableNamesRequest } from "../../services/requests"
import { tableAction } from "./slice"

export const fetchTablesNameAction = () => {
  return (dispatch) => {
    (async function() {
      const tableNames = await getTableNamesRequest()
      dispatch(tableAction.setTablesName(tableNames))
    })()
  }
} 

export const fetchTableDocuments = (tableName, page, documentPerPage) => {
  return (dispatch) => {
    (async function(){
      dispatch(tableAction.setTableDocuments(
        await getTableDocumentsRequest(tableName, page, documentPerPage)
      ))
    })()
  }
}