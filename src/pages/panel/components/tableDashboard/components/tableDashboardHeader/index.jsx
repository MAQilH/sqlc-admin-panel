import { Box, IconButton } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RefreshIcon from '@mui/icons-material/Refresh' 
import { useDispatch } from "react-redux";
import { dialogAction } from "../../../../../../store/dialog/slice";
import DocumentPagination from "./components/DocumentPagination";
import { fetchTablesNameAction } from "../../../../../../store/table/action";
import { useSearchParams } from "react-router-dom"

export default function TableDashboardHeader() {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams();

  const createNewDocumentHandler = () => {
    dispatch(dialogAction.openNewDocumentDialog())
  }

  const handleRefresh = () => {
    dispatch(fetchTablesNameAction())
    refreshTableDocuments()
  }
  
  const refreshTableDocuments = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    newSearchParams.set('page_number', 0)
    const prevRefreshId = parseInt(searchParams.get('refresh_id') || '0')
    console.log('this is prev refresh id', prevRefreshId)
    newSearchParams.set('refresh_id', prevRefreshId + 1)
    setSearchParams(newSearchParams)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: '#003c9c',
        p: '2px'
      }}
    >
      <Box className="left-side-header">
        <DocumentPagination />
      </Box>
      <Box className="right-side-header">
        <IconButton
          onClick={handleRefresh}
        >
          <RefreshIcon 
            sx={{
              fontSize: '25px',
              color: '#cfcfcf'
            }}
          />
        </IconButton>
        <IconButton
          onClick={createNewDocumentHandler}
        >
          <AddCircleIcon 
            sx={{
              fontSize: '25px',
              color: '#cfcfcf'
            }}
          />
        </IconButton>
      </Box>
    </Box>
  )
}