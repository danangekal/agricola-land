import { MouseEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from '@mui/material';

import { deleteCookiesCredential } from '@/app/action';
import Strings from '@/app/farmers/strings';
import { useAppContext } from '@/app/state/context';
import { setCredential, setSnackbar } from '@/app/state/reducer';

const useHooks = () => {
  const { push } = useRouter();
  const { dispatch } = useAppContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery('(max-width:600px)');
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const handleOnClickSignOut = async () => {
    await deleteCookiesCredential();
    handleClose();
    dispatch(
      setSnackbar({
        open: true,
        type: 'success',
        title: 'Success',
        message: Strings.msg_success_sign_out,
      }),
    );
    dispatch(
      setCredential({
        username: '',
        password: '',
      }),
    );
    push('/');
  };

  return {
    anchorEl,
    open,
    handleClick,
    handleClose,
    handleOnClickSignOut,
    isMobile,
  };
};

export default useHooks;
