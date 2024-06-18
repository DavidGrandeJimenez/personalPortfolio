import React from 'react';
import Box from '@mui/material/Box';

const Loading = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#0e1128',
    color: 'white',
    fontSize: {lg:'24px', md:'24px', sm:'18px', xs:'12px'}, 
    fontWeight: 'bold'
  };

  return (
    <Box sx={style}>
      Loading...
      Please, wait a second.
    </Box>
  );
}

export default Loading;
