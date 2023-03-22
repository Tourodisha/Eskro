import React, { useState } from 'react'
import axios from 'axios';
import { Box, Typography, TextField, Link, Button, InputAdornment, IconButton } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import Logo from "../assets/Login-logo.png"
import Middlelogo from "../assets/left-image.png"
import PlaystoreLogo from "../assets/G-playstore.png"
import AppstoreLogo from "../assets/Apple-store.png"
import "../css/Login.css"

const Login = () => {
  const navigate = useNavigate();
  const [vendorId, setvendorId] = useState("");
  const [vendorPassword, setvendorPassword] = useState("");
  const [showvendorPassword, setshowvendorPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleVendorIdchange = (e) => {
    setvendorId(e.target.value);
  }
  const handleVendorPaswordchange = (e) => {
    setvendorPassword(e.target.value);
  }
  const handleVendorShowpassword = () => {
    setshowvendorPassword(!showvendorPassword);
  }
  const jumptoRegisterpage=()=>{
    navigate("/register")
  }
  const handleForgetpassword=()=>{
    navigate('/login/forgot-password');
  }
  const handleLogin = async(e) => {
    e.preventDefault();
    if (vendorId === "777" && vendorPassword === "777") {
      setIsAuthenticated(true);
      navigate('/')
    } else {
      alert("Invalid Id or Password")
    }
  };
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
              <Typography>VENDOR LOGIN</Typography>
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
              onSubmit={handleLogin}
            >
              <TextField
                type="text"
                id="outlined-basic"
                label="Vendor Id"
                variant="outlined"
                fullWidth
                placeholder='Enter Your Vendor Id'
                value={vendorId}
                onChange={handleVendorIdchange}
              />

              <TextField
                id="password"
                label="Password"
                placeholder='Enter Vendor Password'
                type={showvendorPassword ? 'text' : 'password'}
                value={vendorPassword}
                onChange={handleVendorPaswordchange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleVendorShowpassword}>
                        {showvendorPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Typography m={1} variant='body1' sx={{ textAlign: "end", cursor: "pointer" }}>
                <Link onClick={handleForgetpassword}>
                  Forget Password?
                </Link>
              </Typography>
              <Button
                type='submit'
                variant='contained'
                sx={{
                  m: 1,
                  background: "#5677FF",
                }}
                >
                Login
              </Button>
              <Typography m={1} variant='body1' sx={{ textAlign: "center", cursor: "pointer" }}>
                <span>Don't have an account? <Link onClick={jumptoRegisterpage}>Create one</Link></span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Login
