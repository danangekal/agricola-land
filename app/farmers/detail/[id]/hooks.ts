import { FarmerDto } from '@/app/farmers/types';
import { FormFarmer } from '@/app/components/form-farmer/types';

const useHooks = () => {
  const type: FormFarmer = 'detail';
  const initialValues: FarmerDto = {
    name: 'Tes',
    idCardNumber: '9999999',
    birthDate: '1985-09-09',
  };
  const handleSubmit = () => {};

  return { handleSubmit, initialValues, type };
};

export default useHooks;
