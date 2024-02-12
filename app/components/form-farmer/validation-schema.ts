import * as yup from 'yup';

import Strings from '@/app/farmers/strings';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, Strings.msg_min_3_char)
    .required(Strings.msg_required),
  idCardNumber: yup
    .string()
    .test(Strings.value_col_id_number, Strings.msg_not_valid, (value: any) =>
      /^\d+$/.test(value),
    )
    .required(Strings.msg_required),
  birthDate: yup
    .string()
    .test(Strings.value_col_birthdate, Strings.msg_not_valid, (value: any) =>
      /^\d{4}-\d{2}-\d{2}$/.test(value),
    )
    .required(Strings.msg_required),
});

export default validationSchema;
