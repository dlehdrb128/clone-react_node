import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from './type';

export const loginUser = (dataToSubmit) => {
  console.log(dataToSubmit);
  const request = axios
    .post('/api/users/login', dataToSubmit)
    .then((response) => response.data);

  console.log(request);
  console.log(request.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
};

export const registerUser = (dataToSubmit) => {
  const request = axios
    .post('/api/users/register', dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
};

export const auth = () => {
  const request = axios
    .get('/api/users/auth')
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
};
