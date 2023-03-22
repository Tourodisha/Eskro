import React from 'react'
import { Box, Typography, TextField, Link, Button, Input, IconButton, FormControl, Select, MenuItem, InputLabel } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Logo from "../assets/Login-logo.png"
import Middlelogo from "../assets/left-image.png"
import PlaystoreLogo from "../assets/G-playstore.png"
import AppstoreLogo from "../assets/Apple-store.png"
import "../css/Login.css"
const Forgotpassword = () => {
    const vendorConstNumber="7573548272"
  return (
    <Box className="loginWrapper" sx={{ background: "#101120" }}>
    <Box display="flex" sx={{ flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "center" }}>
      <Box height="100%" sx={{ width: { xs: "100%", md: "50%" }, padding: "25px 20px" }} className="backgroundWrapper">
        <Box className="imageWrapper">
          <img src={Logo} alt="logo" />
        </Box>
        <Box className="middlWrapper">
          <img src={Middlelogo} alt="Middlelogo" />
        </Box>
        <Box className="middlWrapperText">
          <Typography variant='h6'>
            Customers can get help and find answers to questions as soon as they come up and in real-time.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", color: "white", margin: "20px" }}>
          <Typography variant='body2'>
            Checkout Eskro Payment App
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={PlaystoreLogo} alt="PlaystoreLogo" style={{ cursor: "pointer" }} />
            <img src={AppstoreLogo} alt="AppstoreLogo" style={{ cursor: "pointer" }} />
          </Box>
        </Box>
      </Box>
      {/* width is set to 100vh for testing */}
      <Box sx={{ width: { xs: "100%", md: "50%" }, height: { xs: "auto", md: "100vh" }, padding: "25px 20px", background: "linear-gradient(180deg, #EFF3FD 0%, #BAC8FF 100%);", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box action="" className="formStyle">
          <Box sx={{ background: "#00C3D6", color: "white", padding: "10px", width: "100%", textAlign: "center" }}>
            <Typography>SEND OTP</Typography>
          </Box>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '35ch' },
            }}
            noValidate
            padding={"20px"}
            autoComplete="off"
          >
            <TextField
              type="number"
              id=""
              label="Vendor Number"
              variant="outlined"
              fullWidth
              value={vendorConstNumber}
              disabled
            />
            <Typography m={1} sx={{textAlign:"center"}}>Are you sure want to continue?</Typography>
            <Button
              type='submit'
              variant='contained'
              sx={{
                m: 1,
                background: "#5677FF",
              }}>
              SEND OTP
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default Forgotpassword