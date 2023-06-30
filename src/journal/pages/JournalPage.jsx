import React from 'react'
import { JournalLayout } from '../Layout/JournalLayout'
import { IconButton, Typography, backdropClasses } from '@mui/material'
import { NothingSelectedView } from '../view/NothingSelectedView'
import { NoteView } from '../view/NoteView'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}>
          <AddOutlined sx={{ fontSize: 30 }}/>

      </IconButton>

    </JournalLayout>
  )
}
