import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const feedSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    // updatePost: null, 
    // comments: {},
    // commentsByPost: {},
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    updateDocid: (state, action) => {
      let post = state.items.filter((post) => post.id === action.payload);
      state.updatePost = post[0];
      // console.log("updateDocid in reducer", post[0]);
    },
  },
 
  },
);
export const { updateDocid } = feedSlice.actions;
export default feedSlice.reducer;
