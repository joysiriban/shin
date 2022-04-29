import React, { useRef, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { RegistrationSchema, RegistrationInitialValue } from '../schema/registrationSchema';
import { AlertStatus } from '../constants/alertStatus';
import signUpService from '../services/signUpService';
import ReCAPTCHA from "react-google-recaptcha";
import { SERVICES } from '../constants/services';
import { LEGAL_TYPES } from '../constants/legalTypes';
import { TURNOVER } from '../constants/turnoverOptions';
import { LICENSE_REQUIRED } from '../constants/licenseRequiredOptions';
import Alert from './Alert';

const SignUpForm = () => {
  const formRef = useRef();
  const captchaRef = useRef();
  const captchaKey = process.env.RECAPTCHA_KEY;

  const [state, setState] = useState({
    status: '',
    showAlert: false,
    showLicenseDetails: true,
    message: ''
  });

  const handleOnSubmit = (values, actions) => {
    setState({
      status: '',
      showAlert: false,
      showLicenseDetails: false,
      message: ''
    });
    values.services = values.services.join(',');
    signUpService.sendSignUpForm(values)
      .then(({ data }) => {
        actions.setSubmitting(false);
        actions.resetForm();
        setState({
          status: AlertStatus.SUCCESS,
          showAlert: true,
          message: data.message
        });
        captchaRef.current.reset();
      })
      .catch(({ response }) => {
        actions.setSubmitting(false);
        setState({
          status: AlertStatus.ERROR,
          showAlert: true,
          message: response.data.message || 'There was a problem while trying to submit your request!'
        });
        values.services = [];
        captchaRef.current.reset();
      });
  }

  const onCaptchaChange = (value) => {
    formRef.current.setFieldValue('captcha', value);
  }

  const onLicenseRequiredChange = (event) => {
    formRef.current.setFieldValue("industry_license_required", event.target.value);
    if ((event.target.value === 'yes') || (event.target.value === 'in_progress')) {
      setState({
        showLicenseDetails: true
      });
    } else if ((event.target.value === 'no') || (event.target.value === 'not_required')) {
      setState({
        showLicenseDetails: false
      });
    }
  }

  return (
    <Formik
      innerRef={formRef}
      initialValues={RegistrationInitialValue}
      validationSchema={RegistrationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ errors, touched, isValid, isSubmitting }) => (
        <Form>
          <div className="flex flex-wrap">
            {state.showAlert
              ? <div className="relative w-full mb-3 mt-8 px-4">
                <Alert state={state.status}>
                  {state.message}
                </Alert>
              </div> : null}
            <div className="relative w-full lg:w-6/12 mb-3 mt-8 px-4">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="first_name"
              >
                First Name
              </label>
              <Field
                name="first_name"
                className={
                  (errors.first_name && touched.first_name ? "border border-red-500" : "" ) +
                  " px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                }
                placeholder="First Name"
                style={{ transition: "all .15s ease" }}
              />
              {errors.first_name && touched.first_name ? (
              <p className="text-red-500 text-xs italic">{errors.first_name}</p>
              ) : null}
            </div>
            <div className="relative w-full lg:w-6/12 mb-3 mt-8 px-4">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="last_name"
              >
                Last Name
              </label>
              <Field
                name="last_name"
                className={
                  (errors.last_name && touched.last_name ? "border border-red-500" : "" ) +
                  " px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                }
                placeholder="Last Name"
                style={{ transition: "all .15s ease" }}
              />
              {errors.last_name && touched.last_name ? (
              <p className="text-red-500 text-xs italic">{errors.last_name}</p>
              ) : null}
            </div>
            <div className="relative w-full lg:w-6/12 mb-3 mt-8 px-4">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <Field
                name="email"
                className={
                  (errors.email && touched.email ? "border border-red-500" : "" ) +
                  " px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                }
                placeholder="Email"
                style={{ transition: "all .15s ease" }}
              />
              {errors.email && touched.email ? (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
              ) : null}
            </div>
            <div className="relative w-full lg:w-6/12 mb-3 px-4 mt-8">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="company"
              >
                Company
              </label>
              <Field
                name="company"
                className={
                  (errors.company && touched.company ? "border border-red-500" : "" ) +
                  " px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                }
                placeholder="Company"
                style={{ transition: "all .15s ease" }}
              />
              {errors.company && touched.company ? (
              <p className="text-red-500 text-xs italic">{errors.company}</p>
              ) : null}
            </div>
            <div className="relative w-full lg:w-6/12 mb-3 px-4 mt-8">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="website"
              >
                Website
              </label>
              <Field
                name="website"
                className={
                  (errors.website && touched.website ? "border border-red-500" : "" ) +
                  " px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                }
                placeholder="Website"
                style={{ transition: "all .15s ease" }}
              />
              {errors.website && touched.website ? (
              <p className="text-red-500 text-xs italic">{errors.website}</p>
              ) : null}
            </div>
            <div className="relative w-full lg:w-6/12 mb-3 mt-8 px-4">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="mobile"
              >
                Mobile
              </label>
              <Field
                name="mobile"
                className={
                  (errors.mobile && touched.mobile ? "border border-red-500" : "" ) +
                  " px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                }
                placeholder="Phone Number"
                style={{ transition: "all .15s ease" }}
              />
              {errors.mobile && touched.mobile ? (
              <p className="text-red-500 text-xs italic">{errors.mobile}</p>
              ) : null}
            </div>
            <div className="relative w-full mb-3 mt-8 px-4">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="registered_address"
              >
                Registered Company Address
              </label>
              <Field
                name="registered_address"
                className={
                  (errors.registered_address && touched.registered_address ? "border border-red-500" : "" ) +
                  " px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                }
                placeholder="Registered Company Address"
                style={{ transition: "all .15s ease" }}
              />
              {errors.registered_address && touched.registered_address ? (
              <p className="text-red-500 text-xs italic">{errors.registered_address}</p>
              ) : null}
            </div>
            <div className="relative w-full lg:w-6/12 mb-3 mt-8 px-4">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="industry"
              >
                Industry
              </label>
              <Field
                name="industry"
                className={
                  (errors.industry && touched.industry ? "border border-red-500" : "" ) +
                  " px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                }
                placeholder="Industry"
                style={{ transition: "all .15s ease" }}
              />
              {errors.industry && touched.industry ? (
              <p className="text-red-500 text-xs italic">{errors.industry}</p>
              ) : null}
            </div>

            <div className="relative w-full lg:w-6/12 mb-3 mt-8 px-4">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="year_of_incorporation"
              >
                Year of Company Incorporation
              </label>
              <Field
                name="year_of_incorporation"
                className={
                  (errors.year_of_incorporation && touched.year_of_incorporation ? "border border-red-500" : "" ) +
                  " px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                }
                placeholder="Year of Company Incorporation"
                style={{ transition: "all .15s ease" }}
              />
              {errors.year_of_incorporation && touched.year_of_incorporation ? (
              <p className="text-red-500 text-xs italic">{errors.year_of_incorporation}</p>
              ) : null}
            </div>

            <div className="flex flex-col">
              <div className="relative w-full mb-3 mt-8 px-4">
                <label
                  className="block uppercase w-full text-gray-700 text-xs font-bold mb-2"
                  htmlFor="industry_license_required"
                >
                  Does your company require an industry license?
                </label>
                <Field
                  as="select"
                  name="industry_license_required"
                  onChange={e => onLicenseRequiredChange(e)}
                  className={
                    (errors.industry_license_required && touched.industry_license_required ? "border border-red-500" : "" ) +
                    " px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  }
                  placeholder="Does your company require an industry license?"
                  style={{ transition: "all .15s ease" }}
                >
                  {LICENSE_REQUIRED.map((e, key) => {
                      return <option key={key} value={e.code}>{e.value}</option>;
                  })}
                </Field>
              </div>
            </div>
            <div className="flex">
              {state.showLicenseDetails &&
                <div className="relative w-full mb-3 mt-8 px-4">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="license_details"
                  >
                    Specify the industry to which the license relates (e.g. gaming, crypto, banking, etc.) and in which country is the license registered. Please mention all industry licenses.
                  </label>
                  <Field
                    component="textarea"
                    name="license_details"
                    className={
                      (errors.license_details && touched.license_details ? "border border-red-500" : "" ) +
                      " px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    }
                    placeholder="Further License Details "
                    style={{ transition: "all .15s ease" }}
                  />
                  {errors.license_details && touched.license_details ? (
                  <p className="text-red-500 text-xs italic">{errors.license_details}</p>
                  ) : null}
                </div>
              }
          </div>
          <div className="relative w-full lg:w-6/12 mb-3 mt-8 px-4">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="legal_type"
              >
                Legal Type
              </label>
              <Field
                as="select"
                name="legal_type"
                className={
                  (errors.legal_type && touched.legal_type ? "border border-red-500" : "" ) +
                  " px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                }
                placeholder="Legal Type"
                style={{ transition: "all .15s ease" }}
              >
                 {LEGAL_TYPES.map((e, key) => {
                      return <option key={key} value={e.code}>{e.value}</option>;
                  })}
              </Field>
            </div>
            <div className="relative w-full lg:w-6/12 mb-3 mt-8 px-4">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="estimated_turnover"
              >
              Estimated Turnover per year (in EUR)
              </label>
              <Field
                as="select"
                name="estimated_turnover"
                className={
                  (errors.estimated_turnover && touched.estimated_turnover ? "border border-red-500" : "" ) +
                  " px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                }
                placeholder="Estimated Turnover"
                style={{ transition: "all .15s ease" }}
              >
                 {TURNOVER.map((e, key) => {
                      return <option key={key} value={e.code}>{e.value}</option>;
                  })}
              </Field>
              {errors.estimated_turnover && touched.estimated_turnover ? (
              <p className="text-red-500 text-xs italic">{errors.estimated_turnover}</p>
              ) : null}
            </div>
            <div className="relative w-full mb-3 mt-8 px-4">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="services"
              >
                Services Required
              </label>

              {SERVICES.map((e, key) => {
                return <div key={key} className="form-check">
                  <label className="form-check-label inline-block text-gray-800" key={key} htmlFor="services">
                    <Field type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    name="services" value={e.code} />
                    {e.value}
                  </label>
                </div>
              })}
              {errors.services && touched.services ? (
              <p className="text-red-500 text-xs italic">{errors.services}</p>
              ) : null}
            </div>
            <div className="relative w-full mb-3 mt-8 px-4">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="full-name"
              >
                Message
              </label>
              <Field
                component="textarea"
                name="message"
                className={
                  (errors.message && touched.message ? "border border-red-500" : "" ) +
                  " px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                }
                placeholder="Message"
                style={{ transition: "all .15s ease" }}
              />
              {errors.message && touched.message ? (
              <p className="text-red-500 text-xs italic">{errors.message}</p>
              ) : null}
            </div>
            <div className="relative w-full mb-3 mt-8 px-4">
              <Field
                name="terms"
                render={({ field }) => {
                  return (<input
                    type="checkbox"
                    className={
                      (errors.terms && touched.terms ? "border border-red-500" : "" ) +
                      " form-checkbox"
                    }
                    checked={field.value} {...field}
                    style={{ transition: "all .15s ease" }}
                  />
                  )
                }}
              />
              <span className="ml-2">I have read and accepted the <a href="/pdf/privacy_policy.pdf" target="_blank" rel="noreferrer" className="underline">Privacy policy</a></span>
              {errors.terms && touched.terms ? (
              <p className="text-red-500 text-xs italic">{errors.terms}</p>
              ) : null}
            </div>
            <div className="relative w-full mb-3 mt-8 px-4">
              <ReCAPTCHA
                ref={captchaRef}
                sitekey={captchaKey}
                onChange={onCaptchaChange}
              />
            </div>
            <div className="relative w-full mb-4 mt-8 px-4">
              <button
                disabled={!isValid || isSubmitting}
                type="submit"
                className={
                  (isValid && !isSubmitting ? "bg-pink-600 hover:bg-pink-100" : "bg-pink-300 hover:bg-gray-600") +
                  " text-white font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                }
                style={{transition: 'all .15s ease'}}
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
