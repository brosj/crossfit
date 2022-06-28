import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#f3f4f6">
      <Stack gap="20px" alignItems="center" px="40px" pt="20px">
        <img src={Logo} alt="logo" width="283px" height="40px"/>
        <Typography pb="20px">&copy; Joshua Onyeuche</Typography>
        {/* <Typography variant="h5" pb="40px" mt="20px">Made with ❤️ by Joshua Onyeuche</Typography> */}
      </Stack>
    </Box>
  )
}

export default Footer