'use client';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar, IconButton } from '@mui/material';

export default function ButtonBack() {
  const { back } = useRouter();

  return (
    <IconButton onClick={() => back()} sx={{ padding: '0' }}>
      <Avatar sx={{ bgcolor: '#fefdf8' }}>
        <ArrowBackIcon sx={{ color: '#000000' }} />
      </Avatar>
    </IconButton>
  );
}
