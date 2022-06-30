import React from 'react';
import { Stack } from '@mui/material';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
      <ThreeDots color="#2f296a" />
    </Stack>
  )
}

export default Loader