'use client';
import FormFarmer from '@/app/components/form-farmer';
import useHooks from './hooks';

export default function EditFarmerPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { handleSubmit, initialValues, type } = useHooks(id);

  return (
    <FormFarmer
      type={type}
      initialValues={initialValues}
      handleOnSubmitForm={handleSubmit}
    />
  );
}
