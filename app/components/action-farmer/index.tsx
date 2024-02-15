'use client';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Divider,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
} from '@mui/material';

import Dialog from '@/app/components/dialog';
import Strings from '@/app/farmers/strings';
import useHooks from './hooks';
import { ActionFarmerProps } from './types';

const ActionFarmer = ({ id, isMobile, name }: ActionFarmerProps) => {
  const {
    anchorEl,
    contentDialog,
    handleClick,
    handleClose,
    handleCloseDialog,
    handleClickDelete,
    handleDrawer,
    isDialog,
    isDrawer,
    open,
    options,
    type,
    titleDialog,
  } = useHooks({ id, isMobile, name });

  return (
    <>
      <IconButton
        aria-label={Strings.label_col_action}
        id={`btn${Strings.value_col_action}`}
        aria-controls={open ? `btn-${Strings.value_col_action}` : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id={`menu${Strings.value_col_action}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        MenuListProps={{
          'aria-labelledby': `menu-${Strings.value_col_action}`,
        }}
      >
        {options.map(({ handleOnClick, icon, label }, index) => (
          <div key={`${index}-${label}`}>
            <MenuItem onClick={handleOnClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText>{label}</ListItemText>
            </MenuItem>
            {index !== options.length - 1 ? (
              <Divider sx={{ bgcolor: '#E1E3D4' }} />
            ) : null}
          </div>
        ))}
      </Menu>
      <Drawer
        anchor="bottom"
        open={isDrawer}
        onClose={handleDrawer}
        PaperProps={{
          sx: {
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          },
        }}
      >
        <MenuList>
          {options.map(({ handleOnClick, icon, label }, index) => (
            <div key={`${index}-${label}`}>
              <MenuItem onClick={handleOnClick}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{label}</ListItemText>
              </MenuItem>
              {index !== options.length - 1 ? (
                <Divider sx={{ bgcolor: '#E1E3D4' }} />
              ) : null}
            </div>
          ))}
        </MenuList>
      </Drawer>
      <Dialog
        open={isDialog}
        type={type}
        title={titleDialog}
        content={contentDialog}
        handleOnCancel={handleCloseDialog}
        handleOnSubmit={handleClickDelete}
      />
    </>
  );
};

export default ActionFarmer;
