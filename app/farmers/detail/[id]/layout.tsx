import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';

import { getCookiesCredential } from '@/app/action';
import ButtonBack from '@/app/components/button-back';
import Profile from '@/app/components/profile';
import Strings from '@/app/farmers/strings';

export const metadata: Metadata = {
  title: `${Strings.title_detail} - ${Strings.title_app}`,
  description: Strings.desc_detail,
};

export default async function DetailFarmerLayout({
  children,
}: {
  children: ReactNode;
}) {
  const credential = await getCookiesCredential();

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ButtonBack />
          <Profile credential={credential} />
        </Box>
      </Grid>
      <Grid xs={12}>
        <Typography component="h5" variant="h6">
          {Strings.title_detail}
        </Typography>
      </Grid>
      <Grid xs={12}>{children}</Grid>
    </Grid>
  );
}
