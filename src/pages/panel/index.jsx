import { Box } from "@mui/material";
import SideBar from "./components/sidebar";
import { Outlet, redirect } from "react-router";
import { verifyTokenRequest } from "../../services/requests";
import { getAuthToken } from "../../services/token";

export default function Panel() { 
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',  
        display: 'flex',
        flexDirection: 'row',
        bgcolor: '#d4e3fa'
      }}  
    >
      <SideBar />
      <Outlet />
    </Box>
  )
}

export function panelLoader() {
  try {
    verifyTokenRequest(getAuthToken())
  } catch {
    return redirect('/auth/login')
  }
}