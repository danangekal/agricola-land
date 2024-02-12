'use client';
import { useRouter } from 'next/navigation';

import Button from '@/app/components/button';
import { ButtonAddProps } from './types';

const ButtonAdd = ({ children }: ButtonAddProps) => {
  const { push } = useRouter();
  const handleClickAdd = () => push('/farmers/add');

  return <Button onClick={handleClickAdd}>{children}</Button>;
};

export default ButtonAdd;
