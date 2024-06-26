import { useRouter } from 'next/navigation';
import { useMediaQuery } from '@mui/material';
import dayjs from 'dayjs';

import { FarmerDto, TypeActionFarmer } from '@/app/farmers/types';
import { createFarmer } from '@/app/farmers/action';
import { useAppContext } from '@/app/state/context';
import { setSnackbar } from '@/app/state/reducer';
import Strings from '../strings';

const useHooks = () => {
  const { push } = useRouter();
  const { dispatch } = useAppContext();
  const isMobile = useMediaQuery('(max-width:600px)');
  const type: TypeActionFarmer = 'add';
  const initialValues: FarmerDto = {
    name: '',
    idCardNumber: '',
    birthDate: '',
  };
  const handleSubmit = async (values: FarmerDto) => {
    try {
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
    } catch (_e) {
      dispatch(
        setSnackbar({
          open: true,
          type: 'error',
          title: Strings.title_error_general,
          message: Strings.msg_error_general,
        }),
      );
    }
  };

  return { handleSubmit, initialValues, isMobile, type };
};

export default useHooks;
