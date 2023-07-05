import { Link as RouterLink} from 'react-router-dom'
import { Google, RoundedCorner } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'

export const LoginPage = () => {

    const { status } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const { email, password, onInputChange} = useForm({
        email: 'carolina@google.com',
        password: '342342'
    })

    const isAuthenticating = useMemo( () => status === 'checking', [status] )

    const onSubmit = (event) =>{
        event.preventDefault()

        dispatch(checkingAuthentication())
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn())

    }

  return (
    <AuthLayout title= 'Login' >
        <form onSubmit={ onSubmit }>
            <Grid container>
                <Grid item xs={12} sx={{ mt:2}} >
                    <TextField 
                        label= "Email" 
                        type='email' 
                        placeholder='email@google.com' 
                        fullWidth
                        name='email'
                        value={ email }
                        onChange={ onInputChange }/>
                </Grid>
                <Grid item xs={12} sx={{ mt:2}} >
                    <TextField 
                        label= "Password"
                        type='password' 
                        placeholder='Password' 
                        fullWidth
                        name='password'
                        value={ password }
                        onChange={ onInputChange }/>
                </Grid>

                <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                    <Grid item xs={12} sm={6}>
                        <Button  
                            disabled = {isAuthenticating}
                            type = 'submit' 
                            variant='contained' 
                            fullWidth 
                            style={{backgroundColor: '#FFC300'}}
                        >
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button 
                            disabled = {isAuthenticating}
                            onClick={ onGoogleSignIn } 
                            variant='contained' 
                            fullWidth 
                            style={{backgroundColor: '#FFC300'}}
                        >
                            <Google>
                                <Typography sx={{ ml: 1 }}></Typography>
                            </Google>
                        </Button>
                    </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                    <Link component={ RouterLink }  to='/auth/register'>
                        Create an account
                    </Link>

                </Grid>


            </Grid>
        </form>

    </AuthLayout>
    
  )
}
