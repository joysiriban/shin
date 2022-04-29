import * as Yup from 'yup';
import { CustomRules } from '../rules';
import { LEGAL_TYPES } from '../constants/legalTypes';
import { TURNOVER } from '../constants/turnoverOptions';
import { LICENSE_REQUIRED } from '../constants/licenseRequiredOptions';

export const RegistrationSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Invalid First Name')
    .max(100, 'Invalid First Name')
    .required('First Name is required'),
  last_name: Yup.string()
    .min(2, 'Invalid Last Name')
    .max(100, 'Invalid Last Name')
    .required('Last Name is required'),
  company: Yup.string()
    .min(2, 'Invalid Company')
    .max(100, 'Invalid Company')
    .required('Company is required'),
  email: Yup.string()
    .email('Invalid Email Address')
    .required('Email is required'),
  mobile: Yup.string()
    .matches(CustomRules.PhonePattern, 'Invalid Phone Number')
    .required('Phone number is required'),
  website: Yup.string()
    .url('Invalid Website')
    .required('Website is required'),
  industry: Yup.string()
    .required('Industry is required'),
  services: Yup.array().of(
    Yup.string()
  ).required('Services is required'),
  legal_type: Yup.string()
    .required('Legal Type is required'),
  registered_address: Yup.string()
    .required('Registered Company Address is required'),
  year_of_incorporation: Yup.string()
    .required('Year of Company Incorporations is required'),
  estimated_turnover: Yup.string()
    .required('Estimated Turnover is required'),
  message: Yup.string()
    .min(2, 'Invalid Message')
    .max(200, 'Invalid Message')
    .required('Message is required'),
  license_details: Yup.string()
    .min(2, 'Invalid License Details')
    .when('showLicenseDetails', {
      is: true,
      then: Yup.string().required('Invalid License Details')
    }),
  captcha: Yup.string().required('Recaptcha is required'),
  terms: Yup.bool().oneOf([true], 'Privacy Policy box must be ticked.')
});

export const RegistrationInitialValue = {
  first_name: '',
  last_name: '',
  email: '',
  company: '',
  website: '',
  mobile: '',
  industry: '',
  legal_type: LEGAL_TYPES[0].code,
  registered_address: '',
  year_of_incorporation: '',
  industry_license_required: LICENSE_REQUIRED[0].code,
  license_details: '',
  estimated_turnover: TURNOVER[0].code,
  services: [],
  provider: 'test',
  message: '',
  captcha: null,
  terms: false
};
