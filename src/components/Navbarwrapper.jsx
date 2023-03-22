import React from 'react'
import { Box } from "@mui/material"
import Navbar from './Navbar';
import { useStateContext } from '../context/Contextprovider';
import "../App.css"

const Navbarwrapper = () => {
    const { activemenu } = useStateContext();
    return (
        <>
            {/* <Box className={activemenu ? 'contentwrapper' : 'sidebarcontentwrapper'} sx={{width:"100% !important"}}> */}
                <Box className="header">
                    <Navbar />
                </Box>
            {/* </Box> */}
        </>
    )
}

export default Navbarwrapper