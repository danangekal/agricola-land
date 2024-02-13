import { Fragment } from 'react';
import { Metadata } from 'next';
import {
  Box,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';

import { getCookiesCredential } from '@/app/action';
import ActionFarmer from '@/app/components/action-farmer';
import ButtonAdd from '@/app/components/button-add';
import Profile from '@/app/components/profile';
import { getFarmerList } from '@/app/farmers/action';
import Strings from './strings';
import { Farmer } from './types';

export const metadata: Metadata = {
  title: `${Strings.title_list} - ${Strings.title_app}`,
  description: Strings.desc_list,
};

export default async function FarmerListPage() {
  const credential = await getCookiesCredential();
  const data = await getFarmerList(1);

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
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
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>{Strings.label_col_no}</TableCell>
              <TableCell>{Strings.label_col_name}</TableCell>
              <TableCell>{Strings.label_col_id_number}</TableCell>
              <TableCell>{Strings.label_col_birthdate}</TableCell>
              <TableCell>{Strings.label_col_action}</TableCell>
            </TableRow>
          </TableBody>
          <TableBody sx={{ bgcolor: '#ffffff' }}>
            {data?.map(
              (
                { id, name, birthDate, idCardNumber }: Farmer,
                index: number,
              ) => (
                <Fragment key={index}>
                  <TableRow>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{idCardNumber}</TableCell>
                    <TableCell>{birthDate}</TableCell>
                    <TableCell>
                      <ActionFarmer id={id} />
                    </TableCell>
                  </TableRow>
                </Fragment>
              ),
            )}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}
