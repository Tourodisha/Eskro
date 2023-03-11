import React, { useEffect } from 'react'
import { NotificationAddOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined, AccountCircleOutlined } from "@mui/icons-material"
import { AppBar, IconButton, InputBase, Toolbar, Box, Tooltip,Avatar } from '@mui/material'
import logo from "../data/avatar.jpg"
const Navbar = ({activemenu,setactivemenu,screensize,setscreensize}) => {
  useEffect(()=>{
    const handleresize=()=>setscreensize(window.innerWidth);
    window.addEventListener('resize',handleresize);
    handleresize();
    return ()=>window.removeEventListener('resize',handleresize)
  },[])
  useEffect(()=>{
    if(screensize<=900){
        setactivemenu(false);
    }
    else{
        setactivemenu(true);
    }
},[screensize])
  return (
    <AppBar sx={{ position: "static", background: "none", boxShadow: "none" }}>
    <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <IconButton onClick={() => setactivemenu(!activemenu)} sx={{ mr: "10px" }}>
                <MenuIcon />
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#dbdbd2", borderRadius: "9px", gap: "3rem", padding: "0.1rem 0.7rem" }}>
                <InputBase placeholder='Search...' />
                <IconButton>
                    <Search />
                </IconButton>
            </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
            <Tooltip title="Setting">
                <IconButton>
                    <SettingsOutlined />
                </IconButton>
            </Tooltip>
            <IconButton>
                <AccountCircleOutlined />
            </IconButton>
            <IconButton>
                <NotificationAddOutlined />
            </IconButton>
            <Avatar alt="Remy Sharp" src={logo} />
        </Box>
    </Toolbar>
</AppBar>
  )
}

export default Navbar