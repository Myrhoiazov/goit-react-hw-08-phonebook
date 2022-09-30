import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'http/http';
import { loginUserService } from 'services/usersApi';

export const loginThunk = createAsyncThunk('auth/login', async body => {
  const data = await loginUserService(body);
  token.set(data.token);
  console.log(222222222);

  return data;
});
