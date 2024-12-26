
import { Box, Paper } from '@mui/material'
import { Outlet, useActionData } from 'react-router';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';


export default function Auth() {

  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor: 'lightGray'
    }}>
      <Paper elevation='6' sx={{
        p: 2,
        width: {
          xs: '100%',
        },
        borderRadius: 2,
        maxWidth: '450px',
      }}>
        <Outlet /> 
      </Paper>
    </Box>
  )
}