import React from 'react'
import { CssBaseline } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import Login from './components/Login'
import "./App.css"
import {Dashboard,Payouts,Product,Revenue,Plans} from "./pages"
import Register from './components/Register'
import Forgotpassword from './components/Forgotpassword'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CssBaseline />
        <Box display="flex" position="relative">
          <Box width="100%">
            <Routes>
              <Route path='/'>
                <Route index  element={<Login />} />
                <Route path='login'  element={<Login />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='register' element={<Register />}/>
                <Route path='forgot-password' element={<Forgotpassword />} />
                <Route path='plans' element={<Plans />} />
                <Route path='revenue' element={<Revenue />} />
                <Route path='product' element={<Product />} />
                <Route path='payouts/payouts1' element={<Payouts />} />
              </Route>
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </div>
  )
}

export default App