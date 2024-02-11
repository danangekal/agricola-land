import { Metadata } from 'next';
import { Avatar, Box, Container, TextField } from '@mui/material';

import Button from '@/components/button';
import Strings from './strings';

export const metadata: Metadata = {
  title: `${Strings.label_btn_sign_in} - ${Strings.title_app}`,
  description: Strings.desc_home,
};

export default function HomePage() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: '#eeefe3',
        }}
      >
        <Avatar
          alt="DayaTani Logo"
          src="/dayatani.png"
          variant="square"
          sx={{ width: '50%', height: '50%' }}
        />
        <Box component="form" sx={{ marginTop: 1 }}>
          <TextField
            color="success"
            margin="normal"
            label={Strings.label_txtbox_username}
            id={Strings.id_txtbox_username}
            name={Strings.id_txtbox_username}
            type="text"
            autoComplete="off"
            autoFocus
            required
            fullWidth
          />
          <TextField
            color="success"
            margin="normal"
            label={Strings.label_txtbox_password}
            id={Strings.id_txtbox_password}
            name={Strings.id_txtbox_password}
            type="password"
            required
            fullWidth
          />
          <Button
            type="submit"
            fullWidth
            sx={{ marginTop: 3, marginBottom: 2 }}
          >
            {Strings.label_btn_sign_in}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
