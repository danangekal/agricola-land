'use client';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar, IconButton } from '@mui/material';

const ButtonBack = () => {
  const { back } = useRouter();

  return (
    <IconButton onClick={() => back()}>
      <Avatar sx={{ bgcolor: '#fefdf8' }}>
        <ArrowBackIcon sx={{ color: '#000000' }} />
      </Avatar>
    </IconButton>
  );
};

export default ButtonBack;
