import React, { useState } from 'react'
import "../css/Login.css"
import { Box, Typography, TextField, Link, Button, Input, IconButton, FormControl, Select, MenuItem, InputLabel } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Logo from "../assets/Login-logo.png"
import Middlelogo from "../assets/left-image.png"
import PlaystoreLogo from "../assets/G-playstore.png"
import AppstoreLogo from "../assets/Apple-store.png"

const Register = () => {

  const options = ['Vendor Type 1', 'Vendor Type 2', 'Vendor Type 3'];
  const navigate = useNavigate();
  const [vendorName, setvendorName] = useState("");
  const [vendorNumber, setvendorNumber] = useState("");
  const [Role, setRole] = useState("");
  const [vendorGstNumber, setvendorGstNumber] = useState("")
  const [vendorAddress, setvendorAddress] = useState("");
  const [vendorProof, setvendorProof] = useState(null);
  const [errors, setErrors] = useState({});
  const handleFileChange = (event) => {
    setvendorProof(event.target.files[0]);
  };
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  const jumpToLoginpage = () => {
    navigate('/login')
  }
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (!vendorName) {
      validationErrors.vendorName = "First name is required"
    }
    setErrors(validationErrors)
    if (Object.keys(validationErrors.length) === 0) {
      alert("Your data is successfully stored in a database");
    }
    console.log('Name:', vendorName);
    console.log("Vendor", Role)
    console.log('Email:', vendorNumber);
    console.log('Password:', vendorAddress);
    console.log('Gender:', vendorProof);
    alert("success");
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
              <Typography>VENDOR REGISTRATION</Typography>
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
              onSubmit={handleRegisterSubmit}
              autoComplete="off"
            >
              <TextField
                type="text"
                id="vendorName"
                label="Vendor Name"
                variant="outlined"
                value={vendorName}
                onChange={(e) => setvendorName(e.target.value)}
                fullWidth
                placeholder='Enter Vendor Name'
              />
              {errors.vendorName && <div className="error">{errors.vendorName}</div>}
              <FormControl sx={{ m: 1 }}>
                <InputLabel id="demo-simple-select-label" label="Vendor Type">Vendor Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  value={Role}
                  onChange={handleRoleChange}
                >
                  {options.map((option) => (
                    <MenuItem key={option} value={option} >{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                type="number"
                id=""
                label="Vendor Phone Number"
                variant="outlined"
                value={vendorNumber}
                onChange={(e) => setvendorNumber(e.target.value)}
                fullWidth
                placeholder='Enter Vendor Phone Number'
              />
              <TextField
                type="number"
                id=""
                label="Vendor GST Number"
                value={vendorGstNumber}
                onChange={(e)=>{setvendorGstNumber(e.target.value)}}
                variant="outlined"
                fullWidth
                placeholder='Enter Vendor GST Number'
              />
              <TextField
                type="text"
                id=""
                label="Vendor Address"
                variant="outlined"
                value={vendorAddress}
                onChange={(e) => setvendorAddress(e.target.value)}
                fullWidth
                placeholder='Enter Vendor Address'
              />
              <TextField
                variant="outlined"
                type="file"
                label='Vendor Proof'
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button
                type='submit'
                variant='contained'
                sx={{
                  m: 1,
                  background: "#5677FF",
                }}>
                Register
              </Button>
              <Typography m={1} variant='body1' sx={{ textAlign: "center", cursor: "pointer" }}>
                <span>Have an account? <Link onClick={jumpToLoginpage}>Login</Link></span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Register