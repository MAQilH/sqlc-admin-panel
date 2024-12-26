import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { dialogAction } from "../../../../../store/dialog/slice";

export default function DocumentItem({
  data
}) {

  const dispatch = useDispatch()

  const showEditDialogHandler = () => {
    dispatch(dialogAction.setDocumentEditData(data))
    console.log(data)
    dispatch(dialogAction.openEditDocumentDialog())
  }

  return (
    <Card
      elevation={5}
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardActionArea onClick={showEditDialogHandler}>
        <CardContent>
          {
            Object.entries(data).map(([key, value]) => {
              return (
                <Box key={key}>
                  <Typography
                    sx={{
                      display: 'inline-block',
                      fontWeight: 'bold',
                      mr: '10px',
                      fontSize: '0.8rem'
                    }}
                  >
                    {key}:
                  </Typography>
                  <Typography
                    sx={{
                      display: 'inline-block',
                      fontSize: '0.7rem'
                    }}
                  >
                    {String(value)}
                  </Typography>
                </Box>
              )
            })
          }
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
