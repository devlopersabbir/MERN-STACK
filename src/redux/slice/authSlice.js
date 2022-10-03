import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "adminAuth",
  initialState: {
    admin: localStorage.getItem("admin")
      ? JSON.parse(localStorage.getItem("admin"))
      : null,
    adminToken: localStorage.getItem("adminToken")
      ? localStorage.getItem("adminToken")
      : null,
  },

  reducers: {
    login: (state, action) => {
      state.admin = action.payload.admin;
      state.adminToken = action.payload.adminToken;
      localStorage.setItem("adminToken", action.payload.adminToken);
      localStorage.setItem("admin", JSON.stringify(action.payload.admin));
    },
    logOut: (state) => {
      state.adminToken = null;
      state.admin = null;
      localStorage.removeItem("adminToken");
      localStorage.removeItem("admin");
    },
  },
});

export const { login, logOut } = authSlice.actions;
export default authSlice.reducer;
