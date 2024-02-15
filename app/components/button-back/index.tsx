'use client';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar, IconButton } from '@mui/material';
import { ButtonbackProps } from './types';

const ButtonBack = ({ isMobile = false }: ButtonbackProps) => {
  const { back } = useRouter();

  if (isMobile) {
    return (
      <IconButton onClick={() => back()} sx={{ paddingX: 0 }}>
        <ArrowBackIcon sx={{ color: '#000000' }} />
      </IconButton>
    );
  }

  return (
    <IconButton onClick={() => back()}>
      <Avatar sx={{ bgcolor: '#fefdf8' }}>
        <ArrowBackIcon sx={{ color: '#000000' }} />
      </Avatar>
    </IconButton>
  );
};

export default ButtonBack;
