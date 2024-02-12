'use client';
import FormFarmer from '@/app/components/form-farmer';
import useHooks from './hooks';

export default function DetailFarmerPage({
  params,
}: {
  params: { id: string };
}) {
  const { handleSubmit, initialValues, type } = useHooks();

  return (
    <FormFarmer
      type={type}
      initialValues={initialValues}
      handleOnSubmitForm={handleSubmit}
    />
  );
}
