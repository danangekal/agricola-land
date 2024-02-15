import { useRouter } from 'next/navigation';
import { useMediaQuery } from '@mui/material';
import dayjs from 'dayjs';
import useSWR from 'swr';

import { updateFarmer } from '@/app/farmers/action';
import Strings from '@/app/farmers/strings';
import { FarmerDto, TypeActionFarmer } from '@/app/farmers/types';
import { useAppContext } from '@/app/state/context';
import { setSnackbar } from '@/app/state/reducer';
import { fetcherGetJson } from '@/app/lib/fetcher';

const useHooks = (id: string) => {
  const { push } = useRouter();
  const { dispatch } = useAppContext();
  const { data, isLoading } = useSWR(`/api/farmers/${id}`, fetcherGetJson);
  const isMobile = useMediaQuery('(max-width:600px)');
  const type: TypeActionFarmer = 'edit';
  // NOTED: Bugs warning on console A component is changing an uncontrolled input to be controlled because set birtDate parse to dayjs format
  const values = { ...data, birthDate: dayjs(data?.birthDate) };
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

  return { type, initialValues, isLoading, isMobile, values, handleSubmit };
};

export default useHooks;
