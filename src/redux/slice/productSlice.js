import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    createProduct: null,
  },
  reducers: {
    created: (state, action) => {
      state.createProduct = action.payload;
    },
    deleted: (state) => {
      state.createProduct = null;
    },
  },
});

export const { created, deleted } = productSlice.actions;
export default productSlice.reducer;
