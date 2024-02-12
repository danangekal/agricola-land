import InfoIcon from '@mui/icons-material/Info';
import { Alert, AlertTitle, Snackbar as MuiSnackbar } from '@mui/material';

import useHooks from './hooks';

const Snackbar = () => {
  const { durationHideAlert, onClose, snackbar } = useHooks();
  const { message, open, title, type } = snackbar;
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
      <Alert
        icon={<InfoIcon fontSize="inherit" />}
        onClose={handleClose}
        severity={type}
      >
        {title ? <AlertTitle>{title}</AlertTitle> : null}
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
