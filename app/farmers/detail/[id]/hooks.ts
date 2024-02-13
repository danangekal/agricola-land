import axios, { AxiosError, AxiosResponse } from 'axios';
import useSWR from 'swr';

import { FormFarmer } from '@/app/components/form-farmer/types';
import { Farmer } from '@/app/farmers/types';

const useHooks = (id: string) => {
  const { data, isLoading } = useSWR<AxiosResponse, AxiosError>(
    `/api/farmers/${id}`,
    axios,
  );
  const type: FormFarmer = 'detail';
  const values = data?.data ?? null;
  const initialValues: Farmer = {
    id: 0,
    name: '',
    idCardNumber: '',
    birthDate: '',
  };
  const handleSubmit = () => {};

  return { type, initialValues, isLoading, values, handleSubmit };
};

export default useHooks;
