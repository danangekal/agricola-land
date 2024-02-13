'use client';
import { ReactNode } from 'react';
import {
  Box,
  Container,
  Unstable_Grid2 as Grid,
  useMediaQuery,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Sidebar from '@/app/components/sidebar';
import Snackbar from '@/app/components/snackbar';
import { FarmerProvider } from './state/context';

function DestopLayout({ children }: { children: ReactNode }) {
  return (
    <Grid container spacing={0.2}>
      <Grid sm={4} md={3} lg={2} xl={2}>
        <Sidebar />
      </Grid>
      <Grid sm={8} md={9} lg={10} xl={10}>
        <Box
          sx={{
            height: '100vh',
            bgcolor: '#eeefe3',
            paddingY: 3,
          }}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  );
}

function MobileLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      {/* <Sidebar /> */}
      {children}
    </Container>
  );
}

export default function FarmersLayout({ children }: { children: ReactNode }) {
  const isMobile = useMediaQuery('(max-width:600px)');

  if (isMobile)
    return (
      <FarmerProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileLayout>
            {children}
            <Snackbar />
          </MobileLayout>
        </LocalizationProvider>
      </FarmerProvider>
    );

  return (
    <FarmerProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DestopLayout>
          {children}
          <Snackbar />
        </DestopLayout>
      </LocalizationProvider>
    </FarmerProvider>
  );
}
