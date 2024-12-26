import { Box } from "@mui/material";
import TableDashboardHeader from "./components/tableDashboardHeader";
import DocumentList from "./components/DocumentList";
import NewDocumentDialog from "./components/NewDocumentDialog";
import { redirect } from "react-router";
import { getTableInfoRequest } from "../../../../services/requests";
import { tableAction } from "../../../../store/table/slice";
import store from "../../../../store";
import EditDocumentDialog from "./components/EditDocumentList";

export default function TableDashboard() { 
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        bgcolor: '#d4e3fa',
        width: '70vw'
      }}
    >
      <TableDashboardHeader />
      <DocumentList />
      <EditDocumentDialog />
      <NewDocumentDialog />
    </Box>
  )
} 

export async function tableDashboardLoader({ params }) {
  const {tableName} = params
  try{
    const tableInfo = await getTableInfoRequest(tableName)
    store.dispatch(tableAction.setCurrentTableInfo(tableInfo))
    return null
  } catch(error) {
    console.error(error)
    return redirect('/panel')
  }
}