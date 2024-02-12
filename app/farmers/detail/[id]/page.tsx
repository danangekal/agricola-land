'use client';
import FormFarmer from '@/app/components/form-farmer';
import useHooks from './hooks';

export default function DetailFarmerPage(props: any) {
  const { handleSubmit, initialValues, type } = useHooks();

  return (
    <FormFarmer
      type={type}
      initialValues={props?.farmer}
      handleOnSubmitForm={handleSubmit}
    />
  );
}
