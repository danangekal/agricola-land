import { MouseEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { deleteFarmer } from '@/app/farmers/action';
import Strings from '@/app/farmers/strings';
import { useAppContext } from '@/app/state/context';
import { setSnackbar } from '@/app/state/reducer';
import { ActionFarmerProps, ActionMenu } from './types';
import { TypeActionFarmer } from '@/app/farmers/types';
import { Typography } from '@mui/material';

const useHooks = ({ id, isMobile, name }: ActionFarmerProps) => {
  const { push } = useRouter();
  const { dispatch } = useAppContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isDialog, setIsDialog] = useState(false);
  const [isDrawer, setIsDrawer] = useState(false);
  const type: TypeActionFarmer = 'delete';
  const titleDialog = Strings.title_modal_delete;
  const contentDialog = Strings.msg_modal_delete.replace('#name', name);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (isMobile) setIsDrawer(true);
    else setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const onHandleShowDialog = () => {
    handleClose();
    setIsDialog(true);
  };
  const handleCloseDialog = () => setIsDialog(false);
  const handleDrawer = () => setIsDrawer(!isDrawer);
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
      label: (
        <Typography sx={{ color: '#4D4F47', fontWeight: 700 }}>
          {Strings.label_act_view}
        </Typography>
      ),
      icon: <VisibilityIcon />,
      handleOnClick: handleClickDetail,
    },
    {
      label: (
        <Typography sx={{ color: '#4D4F47', fontWeight: 700 }}>
          {Strings.label_act_edit}
        </Typography>
      ),
      icon: <EditIcon />,
      handleOnClick: handleClickEdit,
    },
    {
      label: (
        <Typography sx={{ color: '#B42318', fontWeight: 700 }}>
          {Strings.label_act_delete}
        </Typography>
      ),
      icon: <DeleteForeverOutlinedIcon color="error" />,
      handleOnClick: onHandleShowDialog,
    },
  ];

  return {
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
  };
};

export default useHooks;
