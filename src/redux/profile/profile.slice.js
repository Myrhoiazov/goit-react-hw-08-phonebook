import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from 'redux/auth/thunk.auth';
import { profileInitialState } from './initial-state.profile';
import { getProfileThunk } from './thunk.profile';

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  extraReducers: {
    [getProfileThunk.pending]: state => {
      state.status = true;
    },

    [getProfileThunk.fulfilled]: (state, { payload }) => {
      state.status = true;
      state.data = payload;
    },

    [getProfileThunk.rejected]: state => {
      state.status = false;
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.status = true;
      state.data = payload.user;
    },
  },
})

export const profileReducer = profileSlice.reducer;
