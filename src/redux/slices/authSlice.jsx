import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authState: {
    email: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.authState.email = action.payload?.email
        ? action.payload.email
        : state.authState.email;
    },
    logout: (state, action) => {
      state.authState = initialState.authState;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
