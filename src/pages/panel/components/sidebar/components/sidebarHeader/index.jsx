import { AppBar, Grid2, IconButton, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add'

export default function SidebarHeader() {
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
        <IconButton aria-label="logout" size="large">
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

