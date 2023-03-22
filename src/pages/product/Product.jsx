import React from 'react'
import { Box } from '@mui/system'
import Sidebarwrapper from '../../components/Sidebarwrapper'
import Navbarwrapper from '../../components/Navbarwrapper'
import { useStateContext } from '../../context/Contextprovider'

const Product = () => {
  const { activemenu } = useStateContext();
  return (
    <Box display="flex" position="relative" width="100%">
      <Sidebarwrapper />
      <Box className={activemenu ? 'contentwrapper' : 'sidebarcontentwrapper'} sx={{ width: "100% !important" }}>
        <Navbarwrapper />
        <Box m="20px 30px">
          Product
        </Box>
      </Box>
    </Box>
  )
}

export default Product