import { Avatar, Box, Button, TextField } from '@mui/material'
import { Form, NavLink, redirect, useActionData } from 'react-router';
import RegisterAvatar from '../../../assets/login-avatar.png'
import { registerRequest } from '../../../services/requests';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

export default function RegisterForm() {
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
          alt="Register Avatar"
          src={RegisterAvatar}
          sx={{width: 100, height: 100}}
        />
        <TextField 
          name='username'  
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
        <TextField 
          name='confirmPassword' 
          label="Confirm Password" 
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

        <TextField 
          name='email'  
          label='Email'
          variant='outlined' 
          type='email' 
          size='small'
          required
          sx = {{
            mt: 1,
            width: '100%'
          }}
        />

        <TextField 
          name='telegramID'  
          label='Telegram ID'
          variant='outlined' 
          type='text' 
          size='small'
          required
          sx = {{
            mt: 1,
            width: '100%'
          }}
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
        >Register</Button>

        <NavLink to={'/auth/login'}>
        already have an account?
       </NavLink>
      </Box>
    </Form>
  )
}

export async function registerAction({ request }) {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');
  const email = formData.get('email');
  const telegramID = formData.get('telegramID');

  if (password !== confirmPassword) {
    return {
      error: "Password and Cofirm Password doesn't matched!"
    }
  }

  try {
    const resultData = await registerRequest(
      username, 
      password, 
      telegramID,
      email
    )
    const { message } = resultData
    console.log(message)
    return redirect('/auth/login')
  } catch (error) {
    return {error: error.message}
  }
}