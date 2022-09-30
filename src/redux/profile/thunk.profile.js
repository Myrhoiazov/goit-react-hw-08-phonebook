import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'http/http';
import { selectAuth } from 'redux/auth/selector.auth';
import { getUserService } from 'services/usersApi';

export const getProfileThunk = createAsyncThunk(
  '/users/current',
  async (_, { getState, rejectWithValue }) => {
    const auth = selectAuth(getState());

    try {
      if (!auth.token) {
        return rejectWithValue();
      }
      token.set(auth.token);
      return await getUserService();
    } catch {
      return rejectWithValue();
    }
  }
);
