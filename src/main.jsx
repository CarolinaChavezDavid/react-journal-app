import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { JournalApp } from './JournalApp.jsx'
import { RedTheme } from './theme/RedTheme.jsx'
import { AppTheme } from './theme/AppTheme.jsx'
import { RouterProvider } from 'react-router-dom'
import { AuthRouter } from './router/AuthRouter.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'


const router = AuthRouter()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <RouterProvider router={router} />
      </AppTheme>
    </Provider>
  </React.StrictMode>,
)
