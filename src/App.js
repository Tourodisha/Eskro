import React from 'react'
import { CssBaseline } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './pages/layout/Layout'
import Dashboard from './pages/dashboard/Dashboard'
import Exchange from './pages/exchange/Exchange'
import Payouts from './pages/payouts/Payouts'
import Cryptodata from './pages/cryptodata/Cryptodata'
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/exchange' element={<Exchange />} />
            <Route path='/payouts' element={<Payouts />} />
            <Route path='/crypto' element={<Cryptodata />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App