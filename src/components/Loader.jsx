import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

const Loader = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default Loader