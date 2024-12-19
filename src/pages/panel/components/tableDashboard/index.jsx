import { Box } from "@mui/material";
import TableDashboardHeader from "./components/tableDashboardHeader";
import DocumentList from "./components/documentList";
import DocumentEditDialog from "./components/documentEditDialog";
import NewDocumentDialog from "./components/newDocumentDialog";
import { redirect } from "react-router";
import { getTableInfo } from "../../../../services/requests";
import { tableAction } from "../../../../store/table/slice";
import store from "../../../../store";

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
      <DocumentEditDialog />
      <NewDocumentDialog />
    </Box>
  )
} 

export async function tableDashboardLoader({ params }) {
  const {tableName} = params
  try{
    const tableInfo = await getTableInfo(tableName)
    store.dispatch(tableAction.setCurrentTableInfo(tableInfo))
    return null
  } catch(error) {
    console.error(error)
    return redirect('/panel')
  }
}