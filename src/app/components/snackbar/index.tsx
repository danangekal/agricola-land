import { Alert, Snackbar as MuiSnackbar } from '@mui/material';

import useHooks from './hooks';

const Snackbar = () => {
  const { durationHideAlert, onClose, snackbar } = useHooks();
  const { message, open, type } = snackbar;
  const handleClose = () => onClose();

  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      autoHideDuration={durationHideAlert}
      onClose={handleClose}
      open={open}
    >
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
