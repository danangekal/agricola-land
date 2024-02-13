import CloseIcon from '@mui/icons-material/Close';
import {
  IconButton,
  Dialog as MuiDialog,
  DialogActions as MuiDialogActions,
  DialogContent as MuiDialogContent,
  DialogContentText as MuiDialogContentText,
  DialogTitle as MuiDialogTitle,
} from '@mui/material';

import { DialogProps } from './types';

import Button from '@/app/components/button';
import Strings from '@/app/farmers/strings';

const Dialog = ({
  open,
  type,
  title,
  content,
  handleOnCancel,
  handleOnSubmit,
}: DialogProps) => {
  const labelYesButton: any = {
    add: Strings.label_btn_yes_add_modal,
    edit: Strings.label_btn_yes_edit_modal,
    delete: Strings.label_btn_yes_delete_modal,
  };

  return (
    <MuiDialog open={open} onClick={handleOnCancel}>
      <MuiDialogTitle
        id="alert-dialog-title"
        sx={{ m: 0, p: 2, color: '#22231F' }}
      >
        {title}
      </MuiDialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleOnCancel}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: '#22231F',
        }}
      >
        <CloseIcon />
      </IconButton>
      <MuiDialogContent sx={{ m: 0, p: 2, color: '#22231F' }} dividers>
        <MuiDialogContentText id="alert-dialog-description">
          {content}
        </MuiDialogContentText>
      </MuiDialogContent>
      <MuiDialogActions sx={{ m: 0, p: 2 }}>
        <Button
          id={Strings.id_button_no_dialog}
          name={Strings.id_button_no_dialog}
          variant="outlined"
          onClick={() => {
            handleOnCancel();
          }}
          sx={{ color: '#00371d' }}
        >
          {Strings.label_btn_no_modal}
        </Button>
        <Button
          id={Strings.id_button_yes_dialog}
          name={Strings.id_button_yes_dialog}
          onClick={handleOnSubmit}
        >
          {labelYesButton[type]}
        </Button>
      </MuiDialogActions>
    </MuiDialog>
  );
};

export default Dialog;
