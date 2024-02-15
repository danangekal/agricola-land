'use client';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';

import Strings from '@/app/farmers/strings';
import useHooks from './hooks';
import { ProfileProps } from './types';

const Profile = ({ credential }: ProfileProps) => {
  const {
    anchorEl,
    open,
    handleClick,
    handleClose,
    handleOnClickSignOut,
    isMobile,
  } = useHooks();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Tooltip title={Strings.label_open_profile}>
        <IconButton
          aria-label={Strings.label_open_profile}
          id={`btn${Strings.value_col_action}`}
          aria-controls={open ? `btn-${Strings.value_col_action}` : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Avatar
            alt="photo-user"
            src="/user.png"
            sx={{ height: 40, width: 40, border: '2px solid #ffffff' }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        id={`menu${Strings.value_open_profile}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        MenuListProps={{
          'aria-labelledby': `menu-${Strings.value_open_profile}`,
        }}
      >
        <MenuItem onClick={handleOnClickSignOut}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography
              component="h6"
              variant="caption"
              sx={{ color: '#4D4F47' }}
            >
              {Strings.label_act_sign_out}
            </Typography>
          </ListItemText>
        </MenuItem>
      </Menu>
      {!isMobile ? (
        <Typography
          component="h6"
          variant="subtitle2"
          sx={{ paddingY: 2, paddingX: 1, fontWeight: 600 }}
        >
          {credential?.username}
        </Typography>
      ) : null}
    </Box>
  );
};

export default Profile;
