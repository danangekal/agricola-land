import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { setCookiesCredential } from './action';
import { useAppContext } from './state/context';
import { setCredential, setSnackbar } from './state/reducer';
import Strings from './strings';
import { Credential } from './types';
import validationSchema from './validation-schema';

const useHooks = () => {
  const { push } = useRouter();
  const { dispatch } = useAppContext();
  const initialValues: Credential = {
    username: process.env.NEXT_PUBLIC_USERNAME || '',
    password: process.env.NEXT_PUBLIC_PASSWORD || '',
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Credential>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });
  const onSubmit: SubmitHandler<Credential> = async ({
    username,
    password,
  }) => {
    if (
      username === process.env.NEXT_PUBLIC_USERNAME &&
      password === process.env.NEXT_PUBLIC_PASSWORD
    ) {
      const credential = { username, password };

      await setCookiesCredential(credential);
      dispatch(
        setSnackbar({
          open: true,
          type: 'success',
          title: 'Success',
          message: Strings.msg_success_sign_in,
        }),
      );
      dispatch(setCredential(credential));
      push('/farmers');
    } else {
      dispatch(
        setSnackbar({
          open: true,
          type: 'error',
          title: 'Error',
          message: Strings.msg_error_sign_in,
        }),
      );
    }
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
  };
};

export default useHooks;
