import { Backdrop, CircularProgress, Container } from '@mui/material';

import { LoadingBackDropProps } from './types';

export default function LoadingBackdrop({ open }: LoadingBackDropProps) {
  return (
    <Container>
      <Backdrop open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}
