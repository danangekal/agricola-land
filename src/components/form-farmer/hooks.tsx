import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Strings from '@/app/farmers/strings';
import type { IFarmerDto } from '@/app/farmers/types';
import type { IFormFarmer } from './types';
import validationSchema from './validation-schema';

const useHooks = ({ type, initialValues, handleOnSubmitForm }: IFormFarmer) => {
  const labelBtnSubmit =
    type === 'add' ? Strings.label_btn_add : Strings.label_btn_edit;
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFarmerDto>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<IFarmerDto> = (values) =>
    handleOnSubmitForm(values);

  return {
    control,
    errors,
    handleSubmit,
    labelBtnSubmit,
    onSubmit,
  };
};

export default useHooks;
