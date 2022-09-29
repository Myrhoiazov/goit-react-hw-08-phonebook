// import axios from 'axios';
import { publicApi, privateApi } from 'http/http';

export const createUserService = body => {
  return publicApi.post('/users/signup', body);
};

export const loginUserService = async body => {
  const { data } = await publicApi.post('/users/login', body);
  return data;
};

export const getUserService = async body => {
  const { data } = await privateApi.get('/users/current', body);
  return data;
};
