import { useAppContext } from '@/app/state/context';
import { setSnackbar } from '@/app/state/reducer';

const useHooks = () => {
  const { state, dispatch } = useAppContext();
  const { snackbar } = state;
  const durationHideAlert = 2000;
  const onClose = () => {
    dispatch(
      setSnackbar({
        ...snackbar,
        open: false,
      }),
    );
  };

  return {
    durationHideAlert,
    onClose,
    snackbar,
  };
};

export default useHooks;
