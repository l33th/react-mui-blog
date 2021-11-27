import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';

const Main = ({ title }) => {
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
    </Grid>
  );
};

export default Main;
