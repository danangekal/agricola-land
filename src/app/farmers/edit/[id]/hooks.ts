import type { IFarmerDto } from '@/app/farmers/types';
import { TFormFarmer } from '@/components/form-farmer/types';

const useHooks = () => {
  const type: TFormFarmer = 'edit';
  const initialValues: IFarmerDto = {
    name: 'Tes',
    idCardNumber: '9999999',
    birthDate: '1985-09-09',
  };
  const handleSubmit = (values: IFarmerDto) => {
    console.log(values);
  };

  return { handleSubmit, initialValues, type };
};

export default useHooks;
