'use client';
import FormFarmer from '@/app/components/form-farmer';
import useHooks from './hooks';

export default function AddFarmerPage() {
  const { handleSubmit, initialValues, isMobile, type } = useHooks();

  return (
    <FormFarmer
      type={type}
      initialValues={initialValues}
      isMobile={isMobile}
      handleOnSubmitForm={handleSubmit}
    />
  );
}
