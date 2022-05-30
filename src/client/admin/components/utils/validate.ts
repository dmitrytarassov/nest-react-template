import { required, email } from 'react-admin';

export const validateEmail = [required(), email()];

export const validateRequired = required();

export const validatePhone = [
  required(),
  (value) =>
    value < 79999999999 && value > 71000000000
      ? null
      : 'Please set phone un format 79000000',
];

// 7999999999
