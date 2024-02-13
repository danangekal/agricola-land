import { useRouter } from 'next/navigation';

import { FormFarmer } from '@/app/components/form-farmer/types';
import { Farmer, FarmerDto } from '@/app/farmers/types';
import { createFarmer } from '@/app/farmers/action';
import { useAppContext } from '@/app/state/context';
import { setSnackbar } from '@/app/state/reducer';
import Strings from '../strings';

const useHooks = () => {
  const { push } = useRouter();
  const type: FormFarmer = 'add';
  const { dispatch } = useAppContext();
  const initialValues: Farmer = {
    id: 0,
    name: '',
    idCardNumber: '',
    birthDate: '',
  };
  const handleSubmit = async (values: FarmerDto) => {
    await createFarmer(values);
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