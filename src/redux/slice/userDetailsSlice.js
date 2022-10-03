import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    details: null,
  },
  reducers: {
    getDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { getDetails } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
