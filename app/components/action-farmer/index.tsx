'use client';
import { MouseEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';

import { deleteFarmer } from '@/app/action';
import Strings from '@/app/farmers/strings';
import { useAppContext } from '@/app/state/context';
import { setSnackbar } from '@/app/state/reducer';
import { ActionFarmerProps, ActionMenu } from './types';

const ActionFarmer = ({ id }: ActionFarmerProps) => {
  const { push } = useRouter();
  const { dispatch } = useAppContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const handleClickDetail = () => push(`/farmers/detail/${id}`);
  const handleClickEdit = () => push(`/farmers/edit/${id}`);
  const handleClickDelete = async () => {
    await deleteFarmer(id);
    handleClose();
    dispatch(
      setSnackbar({
        open: true,
        type: 'success',
        title: Strings.title_success_edit,
        message: Strings.msg_success_edit,
      }),
    );
    push('/farmers');
  };
  const options: ActionMenu[] = [
    {
      label: 'View',
      icon: <VisibilityIcon />,
      handleOnClick: handleClickDetail,
    },
    {
      label: 'Edit',
      icon: <EditIcon />,
      handleOnClick: handleClickEdit,
    },
    {
      label: 'Delete',
      icon: <DeleteForeverOutlinedIcon color="error" />,
      handleOnClick: handleClickDelete,
    },
  ];

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
        MenuListProps={{
          'aria-labelledby': `menu-${Strings.value_col_action}`,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
    </>
  );
};

export default ActionFarmer;
