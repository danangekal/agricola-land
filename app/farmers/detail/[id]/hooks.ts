import { useMediaQuery } from '@mui/material';
import dayjs from 'dayjs';
import useSWR from 'swr';

import { FarmerDto, TypeActionFarmer } from '@/app/farmers/types';
import { fetcherGetJson } from '@/app/lib/fetcher';

const useHooks = (id: string) => {
  const { data, isLoading } = useSWR(`/api/farmers/${id}`, fetcherGetJson);
  const isMobile = useMediaQuery('(max-width:600px)');
  const type: TypeActionFarmer = 'detail';
  // NOTED: Bugs warning on console A component is changing an uncontrolled input to be controlled because set birtDate parse to dayjs format
  const values = { ...data, birthDate: dayjs(data?.birthDate) };
  const initialValues: FarmerDto = {
    name: '',
    idCardNumber: '',
    birthDate: dayjs(),
  };
  const handleSubmit = () => {};

  return { type, initialValues, isLoading, isMobile, values, handleSubmit };
};

export default useHooks;
