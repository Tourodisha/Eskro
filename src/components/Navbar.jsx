import React, { useEffect } from 'react'
import { HomeOutlined, MenuOutlined, Search } from "@mui/icons-material"
import { Box, IconButton, Tooltip, InputBase } from '@mui/material'
import { useStateContext } from '../context/Contextprovider'
import { AccountCircleOutlined, SettingsOutlined } from "@mui/icons-material"
import "../App.css";
import Setting from './Setting'
import Account from './Account'
const Navbar = () => {
  const { activemenu, setactivemenu, screenSize, setscreenSize, isClicked, setisClicked, handleClick } = useStateContext();
  useEffect(() => {
    const handleresize = () => setscreenSize(window.innerWidth)
    window.addEventListener('resize', handleresize);
    handleresize();
    return () => window.removeEventListener('resize', handleresize)
  }, [])

  useEffect(() => {
    if (screenSize <= 900) {
      setactivemenu(false);
    } else {
      setactivemenu(true);
    }
  }, [screenSize])
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" position="relative" sx={{padding:{md:"15px 20px",xs:"10px"}}}>
      <Box display="flex" alignItems="center" gap="10px">
        <Tooltip title="Menu">
          <IconButton onClick={() => setactivemenu((prevmenu) => !prevmenu)}>
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
          <IconButton onClick={() => handleClick("settings")}>
            <SettingsOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title="Account">
          <IconButton onClick={() => handleClick("account")}>
            <AccountCircleOutlined />
          </IconButton>
        </Tooltip>
        {isClicked.settings && <Setting />}
        {isClicked.account && <Account />}
      </Box>
    </Box>
  )
}

export default Navbar