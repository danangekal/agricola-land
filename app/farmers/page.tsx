import { Metadata } from 'next';
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';

import { getCookiesCredential } from '@/app/action';
import ButtonAdd from '@/app/components/button-add';
import Profile from '@/app/components/profile';
import TableFarmer from '@/app/components/table-farmer';
import { getFarmerList } from '@/app/farmers/action';
import Strings from './strings';

export const metadata: Metadata = {
  title: `${Strings.title_list} - ${Strings.title_app}`,
  description: Strings.desc_list,
};

export default async function FarmerListPage() {
  const credential = await getCookiesCredential();
  const data = await getFarmerList(1);

  return (
    <Grid container spacing={1} sx={{ padding: 2 }}>
      <Grid xs={12}>
        <Profile credential={credential} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography component="h5" variant="h6">
            {Strings.title_list}
          </Typography>
          <ButtonAdd>{Strings.label_btn_add}</ButtonAdd>
        </Box>
      </Grid>
      <Grid xs={12}>
        <TableFarmer data={data} />
      </Grid>
    </Grid>
  );
}
