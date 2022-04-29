import axios from 'axios';

const signUpService = {

  sendSignUpForm: (values) => {
    const API_URL = process.env.API_URL;

    return axios({
      method: "POST",
      url: API_URL + '/v1/apply/registration',
      data: values
    });
  }
};

export default signUpService;
