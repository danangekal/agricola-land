'use client';
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';

import Strings from '@/app/farmers/strings';
import ButtonBack from '@/components/button-back';
import FormFarmer from '@/components/form-farmer';
import Profile from '@/components/profile';
import useHooks from './hooks';

export default function EditFarmerPage({ params }: { params: { id: string } }) {
  const { handleSubmit, initialValues, type } = useHooks();

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ButtonBack />
          <Profile />
        </Box>
      </Grid>
      <Grid xs={12}>
        <Typography component="h5" variant="subtitle1">
          {Strings.title_edit} - {params.id}
        </Typography>
      </Grid>
      <Grid xs={12}>
        <FormFarmer
          type={type}
          initialValues={initialValues}
          handleOnSubmitForm={handleSubmit}
        />
      </Grid>
    </Grid>
  );
}
