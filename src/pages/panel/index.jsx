import { Box } from "@mui/material";
import SideBar from "./components/sidebar";
import { Outlet } from "react-router";

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