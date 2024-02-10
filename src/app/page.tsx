import AgricultureIcon from '@mui/icons-material/Agriculture';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: '#ffffff',
        }}
      >
        <Avatar
          alt="logo-company"
          variant="rounded"
          sx={{ m: 1, bgcolor: 'success.main' }}
        >
          <AgricultureIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            label="Username"
            id="username"
            name="username"
            type="text"
            autoFocus
            required
            fullWidth
          />
          <TextField
            margin="normal"
            label="Password"
            id="password"
            name="password"
            type="password"
            required
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
