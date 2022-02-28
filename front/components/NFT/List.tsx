import { css } from '@emotion/react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Card from './Card';

function NFTList() {
  return (
    <Box sx={{ margin: '0 0 7rem 7rem', width: 'calc(100vw - 11rem)' }}>
      <Grid container rowSpacing="3rem" columnSpacing={'3rem'}>
        <Grid item xl={2} lg={3} md={4} sm={6}>
          <Card />
        </Grid>
        <Grid item xl={2} lg={3} md={4} sm={6}>
          <Card />
        </Grid>
        <Grid item xl={2} lg={3} md={4} sm={6}>
          <Card />
        </Grid>
        <Grid item xl={2} lg={3} md={4} sm={6}>
          <Card />
        </Grid>
        <Grid item xl={2} lg={3} md={4} sm={6}>
          <Card />
        </Grid>
        <Grid item xl={2} lg={3} md={4} sm={6}>
          <Card />
        </Grid>
        <Grid item xl={2} lg={3} md={4} sm={6}>
          <Card />
        </Grid>
        <Grid item xl={2} lg={3} md={4} sm={6}>
          <Card />
        </Grid>
      </Grid>
    </Box>
  );
}

export default NFTList;
