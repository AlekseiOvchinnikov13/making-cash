import {getFeeds} from '../../pages/api/api';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    return getFeeds();
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    status: null
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = 'loading';
    },
    [getPosts.fulfilled]: (state, {payload}) => {
      state.data = payload;
      state.status = 'success';
    },
    [getPosts.rejected]: (state) => {
      state.status = 'failed';
    }
  }
});

export default postsSlice.reducer;