'use client';
import {
  Avatar,
  Box,
  Container,
  Paper,
  Unstable_Grid2 as Grid,
  Typography,
} from '@mui/material';
import { Controller } from 'react-hook-form';

import Button from '@/app/components/button';
import Snackbar from '@/app/components/snackbar';
import TextField from '@/app/components/textfield';
import useHooks from './hooks';
import Strings from './strings';

export default function HomePage() {
  const { control, errors, handleSubmit, onSubmit } = useHooks();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        component={Paper}
        sx={{
          marginTop: 8,
          padding: 3,
          borderRadius: 6,
          bgcolor: '#eeefe3',
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              alt="DayaTani Logo"
              src="/dayatani.png"
              variant="square"
              sx={{ width: '70%', height: '100%' }}
            />
          </Grid>
          <Grid xs={12}>
            <Typography>{Strings.label_txtbox_username}</Typography>
          </Grid>
          <Grid xs={12}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  id={Strings.id_txtbox_username}
                  placeholder={Strings.placeholder_username}
                  error={errors?.username ? true : false}
                  helperText={errors?.username?.message}
                  InputProps={{
                    sx: {
                      borderRadius: 2.5,
                    },
                  }}
                  autoComplete="off"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid xs={12}>
            <Typography>{Strings.label_txtbox_password}</Typography>
          </Grid>
          <Grid xs={12}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  id={Strings.id_txtbox_password}
                  type="password"
                  placeholder={Strings.placeholder_password}
                  error={errors?.password ? true : false}
                  helperText={errors?.password?.message}
                  InputProps={{
                    sx: {
                      borderRadius: 2.5,
                    },
                  }}
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid xs={12}>
            <Button
              onClick={handleSubmit(onSubmit)}
              sx={{ marginTop: 3, marginBottom: 1 }}
              fullWidth
            >
              {Strings.label_btn_sign_in}
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Snackbar />
    </Container>
  );
}
