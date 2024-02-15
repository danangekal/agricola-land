'use client';
import { Box, Typography } from '@mui/material';

import ButtonBack from '@/app/components/button-back';
import FormFarmer from '@/app/components/form-farmer';
import Strings from '@/app/farmers/strings';
import useHooks from './hooks';

export default function DetailFarmerPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { type, initialValues, isLoading, isMobile, values, handleSubmit } =
    useHooks(id);

  return (
    <FormFarmer
      type={type}
      loading={isLoading}
      initialValues={initialValues}
      values={values}
      isMobile={isMobile}
      handleOnSubmitForm={handleSubmit}
    />
  );
}
