'use client';
import { ReactNode, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Drawer,
  Unstable_Grid2 as Grid,
  IconButton,
  useMediaQuery,
} from '@mui/material';

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
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Box
        sx={{
          paddingTop: 2,
          paddingBottom: 0,
          paddingLeft: 3,
          paddingRight: 0,
          margin: 0,
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleSidebar}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer anchor="left" open={sidebar} onClose={handleSidebar}>
        <Sidebar isMobile={true} handleClose={handleSidebar} />
      </Drawer>
      {children}
    </>
  );
}

export default function FarmersLayout({ children }: { children: ReactNode }) {
  const isMobile = useMediaQuery('(max-width:600px)');

  if (isMobile) {
    return (
      <FarmerProvider>
        <MobileLayout>
          {children}
          <Snackbar />
        </MobileLayout>
      </FarmerProvider>
    );
  }

  return (
    <FarmerProvider>
      <DestopLayout>
        {children}
        <Snackbar />
      </DestopLayout>
    </FarmerProvider>
  );
}
