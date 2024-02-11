import type { IFarmerDto } from '@/app/farmers/types';
import { TFormFarmer } from '@/components/form-farmer/types';

const useHooks = () => {
  const type: TFormFarmer = 'add';
  const initialValues: IFarmerDto = {
    name: '',
    idCardNumber: '',
    birthDate: '',
  };
  const handleSubmit = (values: IFarmerDto) => {
    console.log(values);
  };

  return { handleSubmit, initialValues, type };
};

export default useHooks;
