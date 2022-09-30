import { privateApi } from 'http/http';

export const getAllContact = async () => {
  const response = await privateApi.get('/contacts');
  return response;
};

export const getPostContact = async item => {
  const response = await privateApi.post('/contacts', item);
  return response;
};

export const getDeleteContact = async id => {
  const response = await privateApi.delete(`/contacts/${id}`);
  return response;
};

// const requestApi = axios.create({
//   baseURL: 'https://6331b618cff0e7bf70f4d88e.mockapi.io/contacts',
//   params: {},
// });

// export const getAllContact = async () => {
//   const response = await requestApi.get('')
//   return response
// }

// export const getPostContact = async (item) => {
//   const response = await requestApi.post('', item)
//   return response;

// }

// export const getDeleteContact = async (id) => {
//   const response = await requestApi.delete(`/${id}`)
//   return response;
// }
