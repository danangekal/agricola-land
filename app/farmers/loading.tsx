import { Backdrop, CircularProgress, Container } from '@mui/material';

export default function Loading() {
  return (
    <Container>
      <Backdrop open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}
