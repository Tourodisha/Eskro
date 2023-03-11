import React,{useState} from 'react'
import { Box, useMediaQuery } from "@mui/material"
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
const Layout = () => {
    const [activemenu, setactivemenu] = useState(true);
    const [screensize, setscreensize] = useState(undefined)
    return (
        <Box height="100%" width="100%" display="flex">
            <Sidebar
                activemenu={activemenu}
                setactivemenu={setactivemenu}
                screensize={screensize}
                setscreensize={setscreensize}
            />
            <Box height="100%" width="100%">
                <Navbar
                    activemenu={activemenu}
                    setactivemenu={setactivemenu}
                    screensize={screensize}
                    setscreensize={setscreensize}
                />
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout