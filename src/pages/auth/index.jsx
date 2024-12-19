
import { Avatar, Box, Button, Paper, TextField } from '@mui/material'
import { Form, redirect } from 'react-router';
import LoginAvatar from '../../img/login-avatar.png'


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
        <Form method='post'>
          <Box fixed sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            px: 2,
            pb: 1
          }}>
            <Avatar
              alt="Remy Sharp"
              src={LoginAvatar}
              sx={{width: 100, height: 100}}
            />
            <TextField 
              name='username'  
              id="username" 
              label="Username"
              variant="outlined" 
              type='text' 
              size='small'
              required
              minLength={4}
              sx = {{
                mt: 2,
                width: '100%'
              }}
            />
            <TextField 
              name='password' 
              id="password" 
              label="Password" 
              variant="outlined" 
              type='password' 
              size='small'
              sx = {{
                mt: 1,
                width: '100%'
              }}
              required
              minLength={4}
            />
            <Button
              sx={{
                mt: 4,
                width: '100%',
                bgcolor: 'green',
                color: 'white',
                fontWeight: 'bold',
              }}
              type='submit'
            >Login</Button>
          </Box>
        </Form>
      </Paper>
    </Box>
  )
}

export async function loginAction({ request }) {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');

  if(username.length < 4 || password.length < 4) {
    return null;
  }

  return redirect('/panel')
}