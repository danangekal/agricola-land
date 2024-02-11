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

import Strings from '@/app/farmers/strings';
import { IActionFarmer, IActionMenu } from './types';

export default function ActionFarmer({ id }: IActionFarmer) {
  const { push } = useRouter();
  const handleClickDetail = () => push(`/farmers/detail/${id}`);
  const handleClickEdit = () => push(`/farmers/edit/${id}`);
  const handleClickDelete = () => alert('Are you sure?');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const options: IActionMenu[] = [
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
        aria-controls={open ? 'btn-action' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id={`menu${Strings.value_col_action}`}
        MenuListProps={{
          'aria-labelledby': 'menu-action',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map(({ handleOnClick, icon, label }, index) => (
          <div key={`${index}-${label}`}>
            <MenuItem onClick={handleOnClick} sx={{ margin: 0.5 }}>
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
}
