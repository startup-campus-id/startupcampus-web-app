import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import React from 'react';

const PaymentForm = ({ loading }) => {
  return (
    <Stack>
      <Typography>Membuat Invoice</Typography>
      {loading && <CircularProgress />}
    </Stack>
  );
};

export default PaymentForm;
