import { useRouter } from 'next/navigation';

import { updateFarmer } from '@/app/action';
import { FormFarmer } from '@/app/components/form-farmer/types';
import Strings from '@/app/farmers/strings';
import { FarmerDto } from '@/app/farmers/types';
import { useAppContext } from '@/app/state/context';
import { setSnackbar } from '@/app/state/reducer';

const useHooks = (id: string) => {
  const { push } = useRouter();
  const type: FormFarmer = 'edit';
  const { dispatch } = useAppContext();
  const initialValues: FarmerDto = {
    name: 'Tes',
    idCardNumber: '9999999',
    birthDate: '1985-09-09',
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

  return { handleSubmit, initialValues, type };
};

export default useHooks;
