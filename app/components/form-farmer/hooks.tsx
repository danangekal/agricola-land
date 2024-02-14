import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Strings from '@/app/farmers/strings';
import { FarmerDto } from '@/app/farmers/types';
import { FormFarmerProps } from './types';
import validationSchema from './validation-schema';

const useHooks = ({
  initialValues,
  values,
  handleOnSubmitForm,
}: FormFarmerProps) => {
  const [isDialog, setIsDialog] = useState(false);
  const labelBtnSubmit: any = {
    add: Strings.title_modal_add,
    edit: Strings.label_btn_edit,
  };
  const titleDialog: any = {
    add: Strings.title_modal_add,
    edit: Strings.title_modal_edit,
  };
  const contentDialog: any = {
    add: Strings.msg_modal_add,
    edit: Strings.msg_modal_edit,
  };
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
  const onHandleShowDialog = () => setIsDialog(true);
  const onHandleCloseDialog = () => setIsDialog(false);

  return {
    control,
    errors,
    handleSubmit,
    labelBtnSubmit,
    onSubmit,
    isDialog,
    titleDialog,
    contentDialog,
    onHandleCloseDialog,
    onHandleShowDialog,
  };
};

export default useHooks;
