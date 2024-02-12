import { FarmerDto } from '@/app/farmers/types';
import { FormFarmer } from '@/app/components/form-farmer/types';

const useHooks = () => {
  const type: FormFarmer = 'add';
  const initialValues: FarmerDto = {
    name: '',
    idCardNumber: '',
    birthDate: '',
  };
  const handleSubmit = (values: FarmerDto) => {
    console.log(values);
  };

  return { handleSubmit, initialValues, type };
};

export default useHooks;
