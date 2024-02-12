import { FarmerDto } from '@/app/farmers/types';
import { FormFarmer } from '@/app/components/form-farmer/types';

const useHooks = () => {
  const type: FormFarmer = 'detail';
  const initialValues: FarmerDto = {
    name: 'Tes',
    idCardNumber: '9999999',
    birthDate: '1985-09-09',
  };
  const handleSubmit = (values: FarmerDto) => {
    console.log(values);
  };

  return { handleSubmit, initialValues, type };
};

export default useHooks;
