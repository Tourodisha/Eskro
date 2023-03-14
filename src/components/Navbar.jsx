import React, { useEffect } from 'react'
import {HomeOutlined, MenuOutlined,Search} from "@mui/icons-material"
import { Box, IconButton,Tooltip,InputBase } from '@mui/material'
import { useStateContext } from '../context/Contextprovider'
import {CircleNotificationsOutlined,MessageOutlined,AccountCircleOutlined,SettingsOutlined,NotificationAddOutlined} from "@mui/icons-material"
import Setting from './Setting'
import Account from './Account'
const Navbar = () => {
    const {activemenu,setactivemenu,screenSize,setscreenSize,isClicked, setisClicked}=useStateContext();
    useEffect(()=>{
      const handleresize=()=>setscreenSize(window.innerWidth)
      window.addEventListener('resize',handleresize);
      handleresize();
      return ()=> window.removeEventListener('resize',handleresize)
    },[])
  
    useEffect(()=>{
      if(screenSize<=900){
        setactivemenu(false);
      }else{
        setactivemenu(true);
      }
    },[screenSize])
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" position="relative" pt={2} pb={2} pl={3} pr={3}>
      <Box  display="flex" alignItems="center" gap="10px">
      <Tooltip title="Menu">
        <IconButton onClick={()=>setactivemenu((prevmenu)=>!prevmenu)}>
          <MenuOutlined />
        </IconButton>
      </Tooltip>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#dbdbd2", borderRadius: "9px", gap: "3rem", padding: "0.1rem 0.7rem" }}>
                <InputBase placeholder='Search...' />
                <IconButton>
                    <Search />
                </IconButton>
            </Box>
      </Box>
      <Box display="flex">
      <Tooltip title="Setting">
                <IconButton onClick={()=>handleClick("settings")}>
                    <SettingsOutlined />
                </IconButton>
            </Tooltip>
            <Tooltip title="Account">
            <IconButton onClick={()=>handleClick("Account")}>
                <AccountCircleOutlined />
            </IconButton>
            </Tooltip>
            <Tooltip title="Notification">
            <IconButton onClick={()=>handleClick("Notification")}>
                <NotificationAddOutlined />
            </IconButton>
            </Tooltip>
            {isClicked.settings && <Setting />}
            {isClicked.account && <Account />}
            {isClicked.settings && <Setting />}
      </Box>
    </Box>
  )
}

export default Navbar