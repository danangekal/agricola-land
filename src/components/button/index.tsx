import { Button as MuiButton } from '@mui/material';

import { ButtonProps } from './types';

const Button = ({ sx, ...props }: ButtonProps) => (
  <MuiButton
    color="success"
    variant="contained"
    sx={{ borderRadius: 2, color: '#ccee24', ...sx }}
    {...props}
  />
);

export default Button;
