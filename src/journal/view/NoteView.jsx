import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, ImageList, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageListComponent } from '../components/ImageListComponent'

export const NoteView = () => {
  return (
     <Grid container direction='row' justifyContent='space-between' sx={{mb: 1}}>
        <Grid item>
            <Typography fontSize={39}>September 25, 2023</Typography>
        </Grid>

        <Grid item>
            <Button color='primary' sx={{padding: 2}}>
                <SaveOutlined sx={{ fontSize: 20, mr: 1}}/>
                Save
            </Button>
        </Grid>
        <Grid container>
            <TextField 
                type='text'
                variant='filled'
                fullWidth
                placeholder='Add title'
                label = 'Title'
                sx={{border: 'none', mb: 1}}
                />

            <TextField 
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder='What happened today?'
                label = 'Title'
                minRows={ 5 }
                />

        </Grid>

        <ImageListComponent />
     </Grid>
  )
}
