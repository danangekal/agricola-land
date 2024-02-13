'use client';
import FormFarmer from '@/app/components/form-farmer';
import useHooks from './hooks';

export default function EditFarmerPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { type, initialValues, isLoading, values, handleSubmit } = useHooks(id);

  return (
    <FormFarmer
      type={type}
      loading={isLoading}
      initialValues={initialValues}
      values={values}
      handleOnSubmitForm={handleSubmit}
    />
  );
}
