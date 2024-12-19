import { Box } from "@mui/material";
import SidebarHeader from "./components/sidebarHeader";
import TableList from "./components/tableList";
import { useEffect, useState } from "react";
import { getTableNames } from "../../../../services/requests";

export default function SideBar() {

  const [tablesName, setTablesName] = useState(null)

  useEffect(() => {
    async function fetchTableNames() {
      const tableNames = await getTableNames()
      setTablesName(tableNames)
    }
    fetchTableNames()
  }, [])

  return (
    <Box
      sx={{
        width: '30vw',
        maxWidth: '350px',
        minWidth: '200px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#6ba6ff'
      }}
    > 
      <SidebarHeader />
      {tablesName && <TableList tablesName={tablesName}/>}
    </Box>
  )
}