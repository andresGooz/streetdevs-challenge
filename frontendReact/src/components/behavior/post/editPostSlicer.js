import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const updatePost = createAsyncThunk(
  'post/updatePost',
  async ({ id, postData }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_API_DOMAIN_URL}/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Failed to update post');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: 'post',
  initialState: {
    post: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    resetPost: (state) => {
      state.post = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updatePost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.post = action.payload;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetPost } = postSlice.actions;

export default postSlice.reducer;
