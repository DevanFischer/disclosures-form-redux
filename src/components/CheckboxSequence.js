import React from 'react';
// NOTE: MUI
import { FormControlLabel, Checkbox, FormGroup, Box } from '@mui/material';

const CheckboxSequence = ({ sequence, index, ...rest }) => {
  return (
    <Box key={index} mt={1}>
      <FormGroup>
        <FormControlLabel key={index} align="left" control={<Checkbox />} label={sequence.Message} {...rest} />
      </FormGroup>
    </Box>
  );
};

export default CheckboxSequence;
