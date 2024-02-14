import { useRouter } from 'next/navigation';
import axios, { AxiosError, AxiosResponse } from 'axios';
import dayjs from 'dayjs';
import useSWR from 'swr';

import { updateFarmer } from '@/app/farmers/action';
import Strings from '@/app/farmers/strings';
import { FarmerDto, TypeActionFarmer } from '@/app/farmers/types';
import { useAppContext } from '@/app/state/context';
import { setSnackbar } from '@/app/state/reducer';

const useHooks = (id: string) => {
  const { push } = useRouter();
  const { dispatch } = useAppContext();
  const { data, isLoading } = useSWR<AxiosResponse, AxiosError>(
    `/api/farmers/${id}`,
    axios,
  );
  const type: TypeActionFarmer = 'edit';
  const valuesData = data?.data ?? null;
  // NOTED: Bugs warning on console A component is changing an uncontrolled input to be controlled because set birtDate parse to dayjs format
  const values = { ...valuesData, birthDate: dayjs(valuesData?.birthDate) };
  const initialValues = {
    name: '',
    idCardNumber: '',
    birthDate: dayjs(),
  };
  const handleSubmit = async (values: FarmerDto) => {
    const data = {
      ...values,
      birthDate: dayjs(values?.birthDate).format('YYYY-MM-DD'),
    };
    await updateFarmer(id, data);
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
