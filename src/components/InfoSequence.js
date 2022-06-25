import React from 'react';
// NOTE: MUI
import { Typography, Box } from '@mui/material';

const InfoSequence = ({ sequence, index }) => {
  return (
    <Box key={index} mt={2}>
      <Typography key={index} align="left" style={{ fontWeight: 400, fontSize: '16px' }}>
        {sequence.Message}
      </Typography>
    </Box>
  );
};

export default InfoSequence;
