import { Metadata } from 'next';
import {
  Box,
  Typography,
  Unstable_Grid2 as Grid,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Menu,
} from '@mui/material';

import ActionFarmer from '@/components/action-farmer';
import ButtonAdd from '@/components/button-add';
import Profile from '@/components/profile';
import Strings from './strings';

export const metadata: Metadata = {
  title: `${Strings.title_list} - ${Strings.title_app}`,
  description: Strings.desc_list,
};

export default function FarmerListPage() {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid xs={12}>
        <Profile />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography component="h5" variant="subtitle1">
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
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Tes</TableCell>
              <TableCell>123456</TableCell>
              <TableCell>1985-03-03</TableCell>
              <TableCell>
                <ActionFarmer id={Number(1)} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Tes 2</TableCell>
              <TableCell>123456</TableCell>
              <TableCell>1985-03-03</TableCell>
              <TableCell>
                <ActionFarmer id={Number(2)} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}
