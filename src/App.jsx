import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import Panel, { panelLoader } from './pages/panel'
import TableDashboard from './pages/panel/components/tableDashboard'
import {tableDashboardLoader} from './pages/panel/components/tableDashboard'
import { SnackbarProvider } from 'notistack'
import LoginForm, { loginAction } from './pages/auth/components/LoginForm'
import RegisterForm, { registerAction } from './pages/auth/components/RegisterForm'
import Auth from './pages/auth'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/panel" replace />
  },
  {
    path: '/auth',
    element: <Auth />,
    children: [
      {
        path: 'login',
        element: <LoginForm />,
        action: loginAction 
      }, 
      {
        path: 'register',
        element: <RegisterForm />,
        action: registerAction
      }
    ]
  }, 
  {
    path: '/panel',
    element: <Panel />,
    children: [
      {
        path: ':tableName',
        element: <TableDashboard />,
        loader: tableDashboardLoader
      }
    ],
    loader: panelLoader
  }
])


function App() {
  return (
    <SnackbarProvider maxSnack={4}>
      <RouterProvider router={router}/>  
    </SnackbarProvider>
  )
}

export default App
