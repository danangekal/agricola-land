import {
  Avatar,
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from '@mui/material';

import { DummyMenu } from './menu';
import { Menu, SidebarProps } from './types';

const Sidebar = ({ isMobile = false, handleClose }: SidebarProps) => {
  return (
    <Box
      sx={{
        width: isMobile ? 250 : '100%',
        height: '1100px',
        maxHeight: '500vh',
        bgcolor: '#eeefe3',
      }}
      onClick={handleClose}
    >
      <Box
        sx={{
          pt: 5,
          pb: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar
          alt="DayaTani Logo"
          src="/dayatani.png"
          variant="square"
          sx={{ width: '50%', height: '50%' }}
        />
      </Box>
      <MenuList>
        {DummyMenu.map(({ name, icon }: Menu, index) => (
          <Box key={`${index}-${name}`}>
            <MenuItem selected={index === 0}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText>
                <Typography
                  component="h6"
                  variant="caption"
                  sx={{ color: '#4D4F47' }}
                >
                  {name}
                </Typography>
              </ListItemText>
            </MenuItem>
          </Box>
        ))}
      </MenuList>
    </Box>
  );
};

export default Sidebar;
