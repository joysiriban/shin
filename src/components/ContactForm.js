import React, { useRef, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { ContactSchema, ContactInitialValue } from '../schema/contactSchema';
import { AlertStatus } from '../constants/alertStatus';
import contactUsService from '../services/contactUsService';
import ReCAPTCHA from "react-google-recaptcha";
import Alert from './Alert';

const ContactForm = () => {
  const formRef = useRef();
  const captchaRef = useRef();
  const captchaKey = process.env.RECAPTCHA_KEY;

  const [state, setState] = useState({
    status: '',
    showAlert: false,
    message: ''
  });

  const handleOnSubmit = (values, actions) => {
    setState({
      status: '',
      showAlert: false,
      message: ''
    });
    contactUsService.sendContactForm(values)
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
        captchaRef.current.reset();
      });
  }

  const onCaptchaChange = (value) => {
    formRef.current.setFieldValue('captcha', value);
  }

  return (
    <Formik
      innerRef={formRef}
      initialValues={ContactInitialValue}
      validationSchema={ContactSchema}
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
                htmlFor="full-name"
              >
                Full Name
              </label>
              <Field
                name="name"
                className={
                  (errors.name && touched.name ? "border border-red-500" : "" ) +
                  " px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                }
                placeholder="Full Name"
                style={{ transition: "all .15s ease" }}
              />
              {errors.name && touched.name ? (
              <p className="text-red-500 text-xs italic">{errors.name}</p>
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
            <div className="relative w-full lg:w-6/12 mb-3 mt-8 px-4">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <Field
                name="phone"
                className={
                  (errors.phone && touched.phone ? "border border-red-500" : "" ) +
                  " px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                }
                placeholder="Phone Number"
                style={{ transition: "all .15s ease" }}
              />
              {errors.phone && touched.phone ? (
              <p className="text-red-500 text-xs italic">{errors.phone}</p>
              ) : null}
            </div>
            <div className="relative w-full mb-3 mt-8 px-4">
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
            <div className="w-full mb-3 mt-8 px-4">
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

export default ContactForm;
