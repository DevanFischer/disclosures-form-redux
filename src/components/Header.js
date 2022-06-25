import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const Header = ({ pageTitle }) => {
  return (
    <Box my={2}>
      <Typography my={2} align="left" variant="h1" style={{ fontSize: '3rem', fontWeight: 400 }}>
        {pageTitle}
      </Typography>
      <Divider />
      <Typography my={2} align="left" variant="h4" style={{ fontSize: '2rem', fontWeight: 200 }}>
        Please read the information below. In order to continue with your application, all the following checkboxes must be checked.
      </Typography>
    </Box>
  );
};

export default Header;
