import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function DialogHeader({
  title,
  onClose,
  onDelete,
  onSave
}) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          {title}
        </Typography>
        {
          onDelete &&
          <Button autoFocus sx={{
            color: '#fa576a',
            fontWeight: 'bold'
          }} onClick={onDelete}>
            DELETE
          </Button>
        }
        {
          onSave &&
          <Button autoFocus color="inherit" type='submit'>
            SAVE
          </Button>
        }
      </Toolbar>
    </AppBar>
  )
}