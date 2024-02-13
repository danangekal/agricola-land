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

import Dialog from '@/app/components/dialog';
import { deleteFarmer } from '@/app/farmers/action';
import Strings from '@/app/farmers/strings';
import { useAppContext } from '@/app/state/context';
import { setSnackbar } from '@/app/state/reducer';
import { ActionFarmerProps, ActionMenu } from './types';

const ActionFarmer = ({ id, name }: ActionFarmerProps) => {
  const { push } = useRouter();
  const { dispatch } = useAppContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isDialog, setIsDialog] = useState(false);
  const type = 'delete';
  const titleDialog = Strings.title_modal_delete;
  const contentDialog = Strings.msg_modal_delete.replace('#name', name);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const onHandleShowDialog = () => {
    handleClose();
    setIsDialog(true);
  };
  const onHandleCloseDialog = () => setIsDialog(false);
  const handleClickDetail = () => push(`/farmers/detail/${id}`);
  const handleClickEdit = () => push(`/farmers/edit/${id}`);
  const handleClickDelete = async () => {
    await deleteFarmer(id);
    handleClose();
    dispatch(
      setSnackbar({
        open: true,
        type: 'success',
        title: Strings.title_success_delete,
        message: Strings.msg_success_delete,
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
      handleOnClick: onHandleShowDialog,
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
      <Dialog
        open={isDialog}
        type={type}
        title={titleDialog}
        content={contentDialog}
        handleOnCancel={onHandleCloseDialog}
        handleOnSubmit={handleClickDelete}
      />
    </>
  );
};

export default ActionFarmer;
