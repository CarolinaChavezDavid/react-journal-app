import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { RedTheme } from './RedTheme'

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={RedTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      {children}
      <CssBaseline />

    </ThemeProvider>
  )
}
