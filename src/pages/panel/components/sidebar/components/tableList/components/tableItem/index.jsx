import { Card, CardActionArea, CardContent, IconButton, Typography } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router";

export default function TableItem({
  tableItemName
}) {
  const { tableName } = useParams()
  const navigate = useNavigate()

  const handleTableItemClicked = () => {
    navigate(`${tableItemName}`)
    return
  }

  

  return (
    <Card
      // elevation={2}
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
          <IconButton aria-label="delete" size='large'>
            <Delete sx={{
              color: '#f73444'
            }}/>
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  )
} 