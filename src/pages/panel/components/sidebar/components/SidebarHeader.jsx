import { AppBar, Grid2, IconButton, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";
import { removeAuthToken } from "../../../../../services/token";

export default function SidebarHeader() {
  const {enqueueSnackbar} = useSnackbar()
  const navigate = useNavigate()

  const handleLogout = () => {
    try {
      removeAuthToken()
      navigate('/auth/login')
      enqueueSnackbar("You are logged in successfully!", {variant: 'success'})
    } catch(error) {
      enqueueSnackbar(error.message, {variant: 'error'})
    }
  }

  return (
    <AppBar position="static">
      <Grid2 
        container
        flexDirection={'row'} 
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{
          py: '2px',
          bgcolor: '#002863',
        }}
      >
        <IconButton 
          aria-label="logout" 
          size="large"
          onClick={handleLogout}
        >
          <LogoutIcon sx={{
            color: 'white'
          }}/>
        </IconButton>
        <Typography sx={{
          fontWeight: 'bold',
          color: 'white'
        }}>
          Admin Panel
        </Typography>
        <IconButton aria-label="add" size='large'>
          <AddIcon sx={{
            color: 'white'
          }}/>
        </IconButton>
      </Grid2>
    </AppBar>
  )
}

