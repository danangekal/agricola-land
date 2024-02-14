import axios, { AxiosError, AxiosResponse } from 'axios';
import useSWR from 'swr';

import { Farmer, FarmerDto, TypeActionFarmer } from '@/app/farmers/types';

const useHooks = (id: string) => {
  const { data, isLoading } = useSWR<AxiosResponse, AxiosError>(
    `/api/farmers/${id}`,
    axios,
  );
  const type: TypeActionFarmer = 'detail';
  const values = data?.data ?? null;
  const initialValues: FarmerDto = {
    name: '',
    idCardNumber: '',
    birthDate: '',
  };
  const handleSubmit = () => {};

  return { type, initialValues, isLoading, values, handleSubmit };
};

export default useHooks;
