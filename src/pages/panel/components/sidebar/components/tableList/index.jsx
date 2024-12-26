import { Stack } from "@mui/material";
import TableItem from "./components/TableItem";
import { useParams } from "react-router";

export default function TableList({tablesName}) {
  const { tableName } = useParams()
  return (
    <Stack
      sx={{
        px: '3px',
        pt: '3px'
      }}
      spacing={'3px'}
    >
      {
        tablesName.map(tableItemName => {
          return <TableItem 
            key={tableItemName} 
            tableItemName={tableItemName} 
            tableName={tableName}
          />
        })
      }
    </Stack>
  )
}