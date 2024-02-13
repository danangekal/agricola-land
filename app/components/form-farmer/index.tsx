'use client';
import {
  Box,
  Divider,
  Unstable_Grid2 as Grid,
  Paper,
  Skeleton,
  Typography,
} from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';
import { Controller } from 'react-hook-form';

import Strings from '@/app/farmers/strings';
import Button from '@/app/components/button';
import Dialog from '@/app/components/dialog';
import TextField from '@/app/components/textfield';
import useHooks from './hooks';
import { FormFarmerProps } from './types';

const FormFarmer = ({
  type,
  initialValues,
  values,
  loading = false,
  handleOnSubmitForm,
}: FormFarmerProps) => {
  const {
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
  } = useHooks({
    type,
    initialValues,
    values,
    handleOnSubmitForm,
  });

  return (
    <Box
      component={Paper}
      sx={{ width: '60%', padding: 2, borderRadius: 6, bgcolor: '#FEFDF8' }}
    >
      {loading ? (
        <>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Skeleton height={40} width="30%" />
            </Grid>
            <Grid xs={12}>
              <Skeleton height={40} />
            </Grid>
            <Grid xs={12}>
              <Skeleton height={40} width="30%" />
            </Grid>
            <Grid xs={12}>
              <Skeleton height={40} />
            </Grid>
            <Grid xs={12}>
              <Skeleton height={40} width="30%" />
            </Grid>
            <Grid xs={12}>
              <Skeleton height={40} />
            </Grid>
            {type !== 'detail' ? (
              <>
                <Grid xs={12}>
                  <Divider sx={{ bgcolor: '#E1E3D4' }} />
                </Grid>
                <Grid
                  xs={12}
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <Skeleton height={50} width="20%" />
                </Grid>
              </>
            ) : null}
          </Grid>
        </>
      ) : (
        <>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Typography>{Strings.label_col_name}</Typography>
            </Grid>
            <Grid xs={12}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    id={Strings.value_col_name}
                    placeholder={Strings.placeholder_name}
                    error={errors?.name ? true : false}
                    helperText={errors?.name?.message}
                    InputProps={{
                      readOnly: type === 'detail' ? true : false,
                      sx: {
                        borderRadius: 2.5,
                      },
                    }}
                    fullWidth
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid xs={12}>
              <Typography>{Strings.label_col_id_number}</Typography>
            </Grid>
            <Grid xs={12}>
              <Controller
                name="idCardNumber"
                control={control}
                render={({ field }) => (
                  <TextField
                    id={Strings.value_col_id_number}
                    placeholder={Strings.placeholder_id_number}
                    error={errors?.idCardNumber ? true : false}
                    helperText={errors.idCardNumber?.message}
                    InputProps={{
                      readOnly: type === 'detail' ? true : false,
                      sx: {
                        borderRadius: 2.5,
                      },
                    }}
                    fullWidth
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid xs={12}>
              <Typography>{Strings.label_col_birthdate}</Typography>
            </Grid>
            <Grid xs={12}>
              {type === 'detail' ? (
                <Controller
                  name="birthDate"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id={Strings.value_col_birthdate}
                      placeholder={Strings.placeholder_birthdate}
                      error={errors?.birthDate ? true : false}
                      helperText={errors?.birthDate?.message}
                      InputProps={{
                        readOnly: true,
                        sx: {
                          borderRadius: 2.5,
                        },
                      }}
                      fullWidth
                      {...field}
                    />
                  )}
                />
              ) : (
                <Controller
                  name="birthDate"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id={Strings.value_col_birthdate}
                      placeholder={Strings.placeholder_birthdate}
                      error={errors?.birthDate ? true : false}
                      helperText={errors?.birthDate?.message || ''}
                      InputProps={{
                        sx: {
                          borderRadius: 2.5,
                        },
                      }}
                      fullWidth
                      {...field}
                    />
                  )}
                />
                // <Controller
                //   render={({ field }) => (
                //     <DatePicker
                //       slotProps={{
                //         textField: {
                //           size: "small",
                //           color: "success",
                //           placeholder: Strings.placeholder_birthdate,
                //           error: errors?.birthDate ? true : false,
                //           helperText: errors.birthDate?.message,
                //           InputProps: {
                //             sx: {
                //               borderRadius: 2.5,
                //             },
                //           },
                //           fullWidth: true,
                //         },
                //       }}
                //       {...field}
                //     />
                //   )}
                //   name="birthDate"
                //   control={control}
                // />
              )}
            </Grid>
            {type !== 'detail' ? (
              <>
                <Grid xs={12}>
                  <Divider sx={{ bgcolor: '#E1E3D4' }} />
                </Grid>
                <Grid
                  xs={12}
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <Button onClick={onHandleShowDialog}>
                    {labelBtnSubmit[type]}
                  </Button>
                </Grid>
              </>
            ) : null}
          </Grid>
        </>
      )}
      <Dialog
        open={isDialog}
        type={type}
        title={titleDialog[type]}
        content={contentDialog[type]}
        handleOnCancel={onHandleCloseDialog}
        handleOnSubmit={handleSubmit(onSubmit)}
      />
    </Box>
  );
};

export default FormFarmer;
