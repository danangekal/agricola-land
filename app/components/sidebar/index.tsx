// import Link from 'next/link';
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
import { Menu } from './types';

const Sidebar = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        bgcolor: '#eeefe3',
      }}
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
        {DummyMenu.map(({ name, icon, pathname }: Menu, index) => (
          <Box key={`${index}-${name}`}>
            <MenuItem>
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
