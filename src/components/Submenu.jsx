import React, { useState } from 'react'
import { IconButton, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { useStateContext } from '../context/Contextprovider'

const Submenu = ({ item, handleclose }) => {
    const { currentColor } = useStateContext();
    const [subnav, setSubnav] = useState(false);
    const activelink = "d-flex align-items-center gap-1 pt-2 pl-3 pb-2 m-2 hoverlinks";
    const normallinlk = "d-flex align-items-center gap-1 pt-2 pl-3 pb-2 m-2 text-white hoverlinks"
    const showSubnav = () => setSubnav(!subnav);
    return (
        <>
            <NavLink
                to={item.path}
                key={item.title}
                className={({ isactive }) => isactive ? activelink : normallinlk}
                onClick={item.subnav && showSubnav || handleclose}
                style={({ isactive }) => ({
                    backgroundColor: isactive ? currentColor : "",
                    position: "relative",
                    textDecoration: "none"
                })}>
                <IconButton sx={{ color: "white" }}>
                    {item.icon}
                </IconButton>
                <Typography variant='body1' sx={{ textTransform: "capitalize" }}>
                    {item.title}
                </Typography>
                <IconButton style={{ position: "absolute", right: '10px', display: "flex", alignItems: "center", color: "white" }}>
                    {item.subnav && subnav ? item.iconopened : item.subnav ? item.iconClosed : null}
                </IconButton>
            </NavLink>
            {subnav && item.subnav.map((item, index) => {
                return (
                    <NavLink onClick={handleclose} to={item.path} key={index} className={activelink} style={{ color: "white", textDecoration: "none" }}>
                        <IconButton sx={{ color: "white" }}>
                            {item.icon}
                        </IconButton>
                        <Typography>{item.title}</Typography>
                    </NavLink>
                )
            })}
        </>
    )
}

export default Submenu