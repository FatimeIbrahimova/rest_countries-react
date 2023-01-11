import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { MainContext } from '../context/ContextProvider';

const Navbar = () => {
    const {mode,setMode}=useContext(MainContext)
    const changeMode=()=>{
        setMode(mode==="light" ? "dark" : "light")
    }
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{background:"white",color:'black'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Where in the World
          </Typography>
          <DarkModeOutlinedIcon />
          <Button onClick={changeMode} color="inherit">{mode}</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar