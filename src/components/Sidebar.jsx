import React, { useState, useEffect } from 'react'
import { useNavigate, Link, NavLink } from "react-router-dom"
import { Box, Typography, IconButton } from "@mui/material"
import { SettingsOutlined, HomeOutlined, CurrencyExchangeOutlined, LogoDevOutlined } from "@mui/icons-material"
import "../../node_modules/react-pro-sidebar/dist/css/styles.css"
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem, SubMenu } from "react-pro-sidebar"




// const Item = ({ title, to, icon, selected, setSelected}) => {
//   return (
//     <>
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: "white",
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//       <NavLink to={to}>

//       </NavLink>
//     </MenuItem>
//     </>
//   );
// };






const Sidebar = ({ activemenu, setactivemenu, screensize, setscreensize }) => {
  const [selected, setSelected] = useState("Dashboard");
  const handleclosedsidebar = () => {
    if (activemenu && screensize <= 900) {
      setactivemenu(false)
    }
  }
  return (
    <Box component="nav" height="100vh">
      {activemenu && (
        <ProSidebar>
          <SidebarHeader>
            <div
              style={{
                padding: '10px',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: 15,
                letterSpacing: '1px',
                cursor: "pointer",
                display:"flex",
                alignItems:"center",
                color:"white"
              }}
            >
              <IconButton>
                <LogoDevOutlined sx={{color:"#FFFFFF",fontSize:"40px"}}/>
              </IconButton>
              <Typography variant='h4'>
                Eskro
              </Typography>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu>
              <MenuItem icon={<HomeOutlined />}>
                <NavLink to="/dashboard" onClick={handleclosedsidebar}>
                  <Typography variant='h6'>Dashboard</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem icon={<CurrencyExchangeOutlined />}>
                <NavLink to="/exchange" onClick={handleclosedsidebar}>
                  <Typography variant='h6'>Exchange</Typography>
                </NavLink>
              </MenuItem>
              <SubMenu
                title={<Typography variant='h6'>Payouts</Typography>}
                icon={<SettingsOutlined />}
              >
                <MenuItem>
                  <NavLink to="/payouts" onClick={handleclosedsidebar}>
                    <Typography variant='body1'> Payouts 1</Typography>
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/crypto" onClick={handleclosedsidebar}>
                    <Typography variant='body1'>Cryptodata</Typography>
                  </NavLink>
                </MenuItem>
              </SubMenu>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      )}
    </Box>
  )
}

export default Sidebar