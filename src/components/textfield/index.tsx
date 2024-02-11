import { forwardRef } from 'react';
import { TextField as MuiTextField } from '@mui/material';

import { TextFieldProps } from './types';

// eslint-disable-next-line react/display-name
const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => (
  <MuiTextField ref={ref} size="small" color="success" {...props} />
));

export default TextField;
