import { Box, IconButton } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch } from "react-redux";
import { dialogAction } from "../../../../../../store/dialog/slice";
import DocumentPagination from "./components/DocumentPagination";

export default function TableDashboardHeader() {
  const dispatch = useDispatch()

  const createNewDocumentHandler = () => {
    dispatch(dialogAction.openNewDocumentDialog())
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