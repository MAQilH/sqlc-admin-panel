import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Auth, { loginAction } from './pages/auth'
import Panel from './pages/panel'
import TableDashboard from './pages/panel/components/tableDashboard'
import {tableDashboardLoader} from './pages/panel/components/tableDashboard'


const router = createBrowserRouter([
  {
    path: '/login',
    element: <Auth />,
    action: loginAction
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
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router}/>  
  )
}

export default App
