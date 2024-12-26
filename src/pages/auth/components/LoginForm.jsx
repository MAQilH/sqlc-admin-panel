import { Avatar, Box, Button, TextField } from '@mui/material'
import { Form, NavLink, redirect, useActionData } from 'react-router';
import LoginAvatar from '../../../assets/login-avatar.png'
import { loginRequest } from '../../../services/requests';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { setAuthToken } from '../../../services/token';

export default function LoginForm() {
  const {enqueueSnackbar} = useSnackbar()
  const actionData = useActionData()

  useEffect(() => {
    if(actionData?.error) {
      enqueueSnackbar(actionData.error, {variant: 'error'})
    }
  }, [actionData, enqueueSnackbar])

  return (
    <Form method='POST'>
      <Box fixed sx={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        px: 2,
        pb: 1
      }}>
        <Avatar
          alt="Login Avatar"
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
            mb: 1
          }}
          type='submit'
        >Login</Button>
       <NavLink to={'/auth/register'}>
        create new admin account
       </NavLink>
      </Box>
    </Form>
  )
}

export async function loginAction({ request }) {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');
  try {
    const { token } = await loginRequest(username, password)
    setAuthToken(token)
    return redirect('/panel')
  } catch (error) {
    return {error: error.message}
  }
}