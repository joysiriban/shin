import axios from 'axios';

const contactUsService = {

  sendContactForm: (values) => {
    const API_URL = process.env.API_URL;

    return axios({
      method: "POST",
      url: API_URL + '/v1/support/test-contact',
      data: values
    });
  }
};

export default contactUsService;
