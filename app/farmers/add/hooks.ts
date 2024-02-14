import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

import { FarmerDto, TypeActionFarmer } from '@/app/farmers/types';
import { createFarmer } from '@/app/farmers/action';
import { useAppContext } from '@/app/state/context';
import { setSnackbar } from '@/app/state/reducer';
import Strings from '../strings';

const useHooks = () => {
  const { push } = useRouter();
  const type: TypeActionFarmer = 'add';
  const { dispatch } = useAppContext();
  const initialValues: FarmerDto = {
    name: '',
    idCardNumber: '',
    birthDate: '',
  };
  const handleSubmit = async (values: FarmerDto) => {
    const data = {
      ...values,
      birthDate: dayjs(values?.birthDate).format('YYYY-MM-DD'),
    };
    await createFarmer(data);
    dispatch(
      setSnackbar({
        open: true,
        type: 'success',
        title: Strings.title_success_add,
        message: Strings.msg_success_add,
      }),
    );
    push('/farmers');
  };

  return { handleSubmit, initialValues, type };
};

export default useHooks;
