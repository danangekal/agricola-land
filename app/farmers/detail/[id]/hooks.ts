import axios, { AxiosError, AxiosResponse } from 'axios';
import dayjs from 'dayjs';
import useSWR from 'swr';

import { FarmerDto, TypeActionFarmer } from '@/app/farmers/types';

const useHooks = (id: string) => {
  const { data, isLoading } = useSWR<AxiosResponse, AxiosError>(
    `/api/farmers/${id}`,
    axios,
  );
  const type: TypeActionFarmer = 'detail';
  const valuesData = data?.data ?? null;
  // NOTED: Bugs warning on console A component is changing an uncontrolled input to be controlled because set birtDate parse to dayjs format
  const values = { ...valuesData, birthDate: dayjs(valuesData?.birthDate) };
  const initialValues: FarmerDto = {
    name: '',
    idCardNumber: '',
    birthDate: dayjs(),
  };
  const handleSubmit = () => {};

  return { type, initialValues, isLoading, values, handleSubmit };
};

export default useHooks;
