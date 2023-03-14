import React from 'react'
import { CssBaseline } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from './components/Sidebar'
import { Box } from "@mui/material"
import Navbar from './components/Navbar'
import Dashboard from './pages/dashboard/Dashboard'
import Exchange from './pages/exchange/Exchange'
import Payouts from './pages/payouts/Payouts'
import { useStateContext } from './context/Contextprovider'
import "./App.css"
const App = () => {
  const { activemenu } = useStateContext();
  return (
    <div>
      <BrowserRouter>
      <CssBaseline />
      <Box display="flex" position="relative">
          {activemenu ? (
            <Box className="sidebarmobile" sx={{ width: "18rem", position: "fixed", background: "#1F2A40!important", boxShadow: "rgb(0 0 0 / 35%) 0px 5px 15px"}}>
              <Sidebar />
            </Box>
          ) : (
            <Box sx={{ width: "0px" }}>
              <Sidebar />
            </Box>
          )}
          <Box className={activemenu ? 'contentwrapper' : 'sidebarcontentwrapper'}>
            <Box className="header">
              <Navbar />
            </Box>
            <Box>
              <Routes>
                {/* This is for dashboard */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />

                {/* This routes for pages */}
                <Route path="/exchange" element={<Exchange />} />
                <Route path="/payouts" element={<Payouts />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </BrowserRouter>
    </div>
  )
}

export default App