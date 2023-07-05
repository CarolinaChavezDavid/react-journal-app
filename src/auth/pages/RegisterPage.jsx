import { Link as RouterLink} from 'react-router-dom'
import { Google, Password } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'



const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
    password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
    displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch()
    const [formSubmitted, setformSubmitted] = useState(false)

    const { status, errorMessage } = useSelector( state => state.auth );
    const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

    const { 
        displayName, 
        email, 
        password, 
        onInputChange,
        formState,
        isFormValid,
        displayNameValid,
        emailValid,
        passwordValid
     } = useForm(formData, formValidations)

    const onSubmit = (event) => {
        event.preventDefault()
        setformSubmitted(true)
        if( !isFormValid) return;

        dispatch(startCreatingUserWithEmailPassword())
    }

  return (
    <AuthLayout title= 'Create account' >
        <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
            <Grid container>
                <Grid item xs={12} sx={{ mt:2}}>
                    <TextField 
                        label= "Full name" 
                        type='text' 
                        placeholder='Carolina Chavez' 
                        name="displayName"
                        value={ displayName }
                        onChange={ onInputChange }
                        error={ !!displayNameValid && formSubmitted }
                        helperText={ displayNameValid }
                        fullWidth/>
                </Grid>

                <Grid item xs={12} sx={{ mt:2}}>
                    <TextField 
                        label= "Email" 
                        type='email' 
                        placeholder='email@google.com' 
                        fullWidth/>
                </Grid>
                <Grid item xs={12} sx={{ mt:2}}>
                    <TextField 
                        label= "Password" 
                        type='password' 
                        placeholder='Password'
                        name="email"
                        value={ email }
                        onChange={ onInputChange }
                        error = {!!passwordValid}
                        helperText = {passwordValid}
                        fullWidth/>
                </Grid>

                <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                    <Grid item xs={12} >
                        <Button type = 'submit' contained fullWidth style={{backgroundColor: '#FFC300'}}>
                            Create account
                        </Button>
                    </Grid>
                </Grid>

                <Grid 
                    item 
                    xs={ 12 }
                    display={ !!errorMessage ? '': 'none' }
                >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>


                <Grid container direction='row' justifyContent='end'>
                    <Typography sx={{mr:1}}>¿Already have an account?</Typography>
                    <Link component={ RouterLink } color='inherit' to='/auth/login'>
                        Log in
                    </Link>

                </Grid>


            </Grid>
        </form>

    </AuthLayout>
    
  )
}
