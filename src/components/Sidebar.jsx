import React,{useState} from 'react'
import { Link, NavLink } from "react-router-dom"
import { Box, IconButton, Typography } from "@mui/material"
import { SettingsOutlined, CancelOutlined } from "@mui/icons-material"
import {Sidebardata} from "./Sidebardata"
import Submenu from "./Submenu"
import {useStateContext} from "../context/Contextprovider"

const Sidebar = () => {
  const {activemenu,setactivemenu,screenSize,setscreenSize,currentColor}=useStateContext();
  const [subnav, setsubnav] = useState(false)
  const showsubnav = () => setsubnav(!subnav)
  const handleclose=()=>{
      if(activemenu && screenSize <= 900){
          setactivemenu(false)
      }
  }
  return (
    <div className='sidebarcontent'>
    {activemenu && (
        <>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Link to="/" onClick={handleclose} className="sidebarlogo">
                    <SettingsOutlined />
                    <Typography variant='h6'>ESKRO</Typography>
                    <IconButton sx={{ position: "absolute", right: "20px !important" ,cursor:"pointer",top:"-7px !important"}} className="cancelicon" onClick={()=>setactivemenu((prevactivemenu)=>!prevactivemenu)} style={{color:currentColor}}>
                        <CancelOutlined />
                    </IconButton>
                </Link>
            </Box>
            <Box marginTop="2.5rem">
                {Sidebardata.map((item,index) => {
                    return <Submenu item={item} key={index} handleclose={handleclose}/>
                })}
            </Box>
        </>
    )}
</div>
  )
}

export default Sidebar