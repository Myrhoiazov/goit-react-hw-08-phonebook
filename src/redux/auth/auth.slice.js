import { createSlice } from '@reduxjs/toolkit';
import { getProfileThunk } from 'redux/profile/thunk.profile';
import { loginThunk } from './thunk.auth';
const { default: authInitialState } = require('./initial-state.auth');

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    logoutAction: () => authInitialState,
  },
  extraReducers: {
    [loginThunk.pending]: state => {
      state.status = true;
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.status = true;
      state.token = payload.token;
    },
    [loginThunk.rejected]: state => {
      state.status = false;
    },
    [getProfileThunk.rejected]: state => {
      state.status = false;
      state.token = '';
    },
  },
});

export const { logoutAction } = authSlice.actions;

export const authReducer = authSlice.reducer;
