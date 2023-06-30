import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

export const RedTheme =  createTheme({
    palette: {
        primary: {
            main: '#001D3D'
        },
        secondary: {
            main: '#003566'
        },
        error: {
            main: red.A400
        }
    }
}

)
