import { Stack } from "@mui/material";
import TableItem from "./components/tableItem";

export default function TableList({tablesName}) {
  return (
    <Stack
      sx={{
        px: '3px',
        pt: '3px'
      }}
      spacing={'3px'}
    >
      {
        tablesName.map(tableName => {
          return <TableItem key={tableName} tableItemName={tableName}/>
        })
      }
    </Stack>
  )
}