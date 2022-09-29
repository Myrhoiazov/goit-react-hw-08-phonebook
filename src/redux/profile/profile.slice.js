import { createSlice } from '@reduxjs/toolkit';
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
  },
})

export const profileReducer = profileSlice.reducer;
