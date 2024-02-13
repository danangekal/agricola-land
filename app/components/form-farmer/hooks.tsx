import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Strings from '@/app/farmers/strings';
import { FarmerDto } from '@/app/farmers/types';
import { FormFarmerProps } from './types';
import validationSchema from './validation-schema';

const useHooks = ({
  type,
  initialValues,
  values,
  handleOnSubmitForm,
}: FormFarmerProps) => {
  const labelBtnSubmit =
    type === 'add' ? Strings.label_btn_add : Strings.label_btn_edit;
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FarmerDto>({
    defaultValues: initialValues,
    values,
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });
  const onSubmit: SubmitHandler<FarmerDto> = (values) =>
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
