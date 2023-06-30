import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { RegisterPage } from '../auth/pages/RegisterPage'
import { JournalApp } from '../JournalApp'
import { JournalPage } from '../journal/pages/JournalPage'

export const AuthRouter = () => {
  return(
    createBrowserRouter([
        {   path: "/",
            element: <JournalPage />,
        },
        {
            path: "/auth/login",
            element: <LoginPage />, 
        },
        {
            path: "/auth/register",
            element: <RegisterPage />, 
        },
    ])
  )
}
