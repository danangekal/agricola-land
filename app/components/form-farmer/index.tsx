'use client';
import {
  Box,
  Divider,
  Unstable_Grid2 as Grid,
  Paper,
  Skeleton,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
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
  isMobile = false,
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
    handleCloseDialog,
    handleShowDialog,
  } = useHooks({
    type,
    initialValues,
    values,
    handleOnSubmitForm,
  });
  const errorMsgBirtDate: any = errors?.birthDate?.message;

  return (
    <Grid container spacing={2}>
      <Grid xs={12} sx={{ padding: 2 }}>
        <Box
          component={Paper}
          sx={(theme) => ({
            width: '60%',
            [theme.breakpoints.down('md')]: {
              width: '100%',
            },
            padding: 2,
            borderRadius: 6,
            bgcolor: '#FEFDF8',
          })}
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
                {type !== 'detail' && !isMobile ? (
                  <>
                    <Grid xs={12}>
                      <Divider sx={{ bgcolor: '#E1E3D4' }} />
                    </Grid>
                    <Grid xs={12} display="flex" justifyContent="flex-end">
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
                  <Typography component="h5" variant="body1">
                    {Strings.label_col_name}
                  </Typography>
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
                  <Typography component="h5" variant="body1">
                    {Strings.label_col_id_number}
                  </Typography>
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
                  <Typography component="h5" variant="body1">
                    {Strings.label_col_birthdate}
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Controller
                      name="birthDate"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          format="DD MMMM YYYY"
                          disableFuture={true}
                          readOnly={type === 'detail' ? true : false}
                          slotProps={{
                            textField: {
                              size: 'small',
                              color: 'success',
                              placeholder: Strings.placeholder_birthdate,
                              error: errors?.birthDate ? true : false,
                              helperText: errorMsgBirtDate,
                              InputProps: {
                                sx: {
                                  borderRadius: 2.5,
                                },
                              },
                              fullWidth: true,
                            },
                          }}
                          {...field}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                {type !== 'detail' && !isMobile ? (
                  <>
                    <Grid xs={12}>
                      <Divider sx={{ bgcolor: '#E1E3D4' }} />
                    </Grid>
                    <Grid xs={12} display="flex" justifyContent="flex-end">
                      <Button onClick={handleShowDialog}>
                        {labelBtnSubmit[type]}
                      </Button>
                    </Grid>
                  </>
                ) : null}
              </Grid>
            </>
          )}
        </Box>
      </Grid>
      {type !== 'detail' && isMobile ? (
        <Grid
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          sx={{ marginTop: 5, padding: 2, borderTop: '1px solid #D3D6C4' }}
        >
          {loading ? (
            <Skeleton height={60} width="100%" />
          ) : (
            <Button onClick={handleShowDialog} fullWidth>
              {labelBtnSubmit[type]}
            </Button>
          )}
        </Grid>
      ) : null}
      <Dialog
        open={isDialog}
        type={type}
        title={titleDialog[type]}
        content={contentDialog[type]}
        handleOnCancel={handleCloseDialog}
        handleOnSubmit={handleSubmit(onSubmit)}
      />
    </Grid>
  );
};

export default FormFarmer;
