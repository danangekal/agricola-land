'use client';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Avatar,
  Box,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';

export default function Profile() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Tooltip title="Open Settings">
        {/* <IconButton> */}
        <Avatar
          alt="photo-user"
          src="/user.png"
          sx={{ height: 40, width: 40, border: '2px solid #ffffff' }}
        />
        {/* </IconButton> */}
      </Tooltip>
      {!isMobile ? (
        <Typography
          component="h6"
          variant="subtitle1"
          sx={{ padding: 1, fontSize: '14px' }}
        >
          Username
        </Typography>
      ) : null}
    </Box>
  );
}
