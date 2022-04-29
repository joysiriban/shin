import * as Yup from 'yup';
import { CustomRules } from '../rules';

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Invalid Name')
    .max(100, 'Invalid Name')
    .required('Name is required'),
  company: Yup.string()
    .min(2, 'Invalid Company')
    .max(100, 'Invalid Company')
    .required('Company is required'),
  email: Yup.string()
    .email('Invalid Email Address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(CustomRules.PhonePattern, 'Invalid Phone Number')
    .required('Phone number is required'),
  website: Yup.string()
    .url('Invalid Website')
    .required('Website is required'),
  message: Yup.string()
    .min(2, 'Invalid Message')
    .max(200, 'Invalid Message')
    .required('Message is required'),
  captcha: Yup.string().required('Recaptcha is required'),
  terms: Yup.bool().oneOf([true], 'Privacy Policy box must be ticked.')
});

export const ContactInitialValue = {
  name: '',
  company: '',
  email: '',
  phone: '',
  website: '',
  message: '',
  captcha: null,
  terms: false
};
