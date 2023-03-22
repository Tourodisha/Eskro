import React from 'react'
import {Box} from "@mui/material"
import Sidebar from './Sidebar';
import { useStateContext } from '../context/Contextprovider';
import "../App.css"

const Sidebarwrapper = () => {
    const { activemenu } = useStateContext();
    return (
        <>
            {activemenu ? (
                <Box className="sidebarmobile" sx={{ width: "15rem", position: "fixed", background: "#1F2A40!important", boxShadow: "rgb(0 0 0 / 35%) 0px 5px 15px" }}>
                    <Sidebar />
                </Box>
            ) : (
                <Box sx={{ width: "0px" }}>
                    <Sidebar />
                </Box>
            )}
        </>
    )
}

export default Sidebarwrapper