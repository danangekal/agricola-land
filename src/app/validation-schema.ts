import * as yup from 'yup';

import Strings from './strings';

const validationSchema = yup.object().shape({
  username: yup.string().required(Strings.msg_required),
  password: yup.string().required(Strings.msg_required),
});

export default validationSchema;
