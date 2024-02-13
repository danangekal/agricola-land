import { useRouter } from 'next/navigation';
import axios, { AxiosError, AxiosResponse } from 'axios';
import useSWR from 'swr';

import { FormFarmer } from '@/app/components/form-farmer/types';
import { updateFarmer } from '@/app/farmers/action';
import Strings from '@/app/farmers/strings';
import { Farmer, FarmerDto } from '@/app/farmers/types';
import { useAppContext } from '@/app/state/context';
import { setSnackbar } from '@/app/state/reducer';

const useHooks = (id: string) => {
  const { push } = useRouter();
  const { dispatch } = useAppContext();
  const { data, isLoading } = useSWR<AxiosResponse, AxiosError>(
    `/api/farmers/${id}`,
    axios,
  );
  const type: FormFarmer = 'edit';
  const values = data?.data ?? null;
  const initialValues: Farmer = {
    id: 0,
    name: '',
    idCardNumber: '',
    birthDate: '',
  };
  const handleSubmit = async (values: FarmerDto) => {
    await updateFarmer(id, values);
    dispatch(
      setSnackbar({
        open: true,
        type: 'success',
        title: Strings.title_success_edit,
        message: Strings.msg_success_edit,
      }),
    );
    push('/farmers');
  };

  return { type, initialValues, isLoading, values, handleSubmit };
};

export default useHooks;
