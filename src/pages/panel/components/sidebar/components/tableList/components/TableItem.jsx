import { Card, CardActionArea, CardContent, IconButton, Typography } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { useNavigate } from "react-router";
import { dropTableRequest } from "../../../../../../../services/requests";
import { useSnackbar } from "notistack";

export default function TableItem({
  tableName,
  tableItemName,
  key
}) {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  const handleTableItemClicked = () => {
    navigate(`${tableItemName}`)
    return
  }

  const handleDropTable = async () => {
    try {
      const result = await dropTableRequest(tableName)
      enqueueSnackbar(result.message, {variant: 'success'})
    } catch(error) {
      enqueueSnackbar(error.message, {variant: 'error'})
    }
  }

  return (
    <Card
      key={key}
      sx={{
        bgcolor: tableName === tableItemName? '#002e73': '#023f9c',
        cursor: 'pointer',
        p: 0,
        '&:hover': {
          bgcolor: '#002863'
        }
      }}
    >
      <CardActionArea
        onClick={handleTableItemClicked}
      >
        <CardContent
          sx={{
            p: 0,
            pl: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        > 
          <Typography
            sx={{
              color: '#dce7f7'
            }}
          >
            {tableItemName}
          </Typography>
          <IconButton 
            aria-label="delete" 
            size='large'
            onClick={handleDropTable}
          >
            <Delete sx={{
              color: '#f73444'
            }}/>
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  )
} 