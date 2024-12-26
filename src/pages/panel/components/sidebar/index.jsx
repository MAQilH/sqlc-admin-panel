import { Box } from "@mui/material";
import SidebarHeader from "./components/SidebarHeader";
import TableList from "./components/tableList";
import { useEffect } from "react";
import { fetchTablesNameAction } from "../../../../store/table/action";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export default function SideBar() {
  const tablesName = useSelector(store => store.table.tablesName)
  const {enqueueSnackbar} = useSnackbar()
  const dispatch = useDispatch()

  useEffect(() => {
    try{
      dispatch(fetchTablesNameAction())
      console.log('fetch tables name')
    } catch(error) {
      enqueueSnackbar(error.message, {variant: 'error'})
    }
  }, [enqueueSnackbar, dispatch])

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