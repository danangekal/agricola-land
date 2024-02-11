// import Link from 'next/link';
import {
  Avatar,
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from '@mui/material';

import { DummyMenu } from './menu';
import type { IMenu } from './types';

export default function Sidebar() {
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
        {DummyMenu.map(({ name, icon, pathname }: IMenu, index) => (
          <Box key={`${index}-${name}`}>
            <MenuItem>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText sx={{ fontSize: '14px' }}>{name}</ListItemText>
            </MenuItem>
          </Box>
        ))}
      </MenuList>
    </Box>
  );
}
