import * as yup from 'yup';

const usernameRegexp =
  /^(?:\s*[a-zA-Z'-]{1,32}(?:\s+[a-zA-Z'-]{1,32})?|\s*[a-zA-Z'-]{1,64})\s*$/;
const emailRegexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const phoneRegexp = /^0\d{2}\d{2}\d{2}\d{3}$/;

export const schema = yup.object().shape({
  username: yup
    .string()
    .required('Full name is required')
    .min(3, 'Minimum 3 characters')
    .max(32, 'Maximum 32 characters')
    .matches(usernameRegexp, 'Incorrect name'),
  email: yup
    .string()
    .required('Email is required')
    .matches(emailRegexp, 'Incorrect email'),
  position: yup
    .string()
    .max(32, 'Maximum 32 characters'),
  phone: yup
    .string()
    .matches(phoneRegexp, 'Incorrect phone'),
  message: yup.string().max(500, 'Maximum 500 characters'),
  checked: yup
    .boolean()
    .oneOf([true], 'Confirm your consent')
});

export default schema;
