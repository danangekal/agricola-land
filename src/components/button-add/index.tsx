'use client';
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/button';

export default function ButtonAdd({ children }: { children: ReactNode }) {
  const { push } = useRouter();
  const handleClickAdd = () => push('/farmers/add');

  return <Button onClick={handleClickAdd}>{children}</Button>;
}
