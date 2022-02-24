import * as yup from 'yup';

export const loginValidationSchema = yup.object({
  email: yup.string().email('Введите E-mail').required('Обязательное поле'),
  password: yup.string().required('Обязательное поле'),
  rememberPassword: yup.boolean(),
});
