import Cookies from "js-cookie";

const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,

    admin: false,
    adminError: false,
  },

  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;

      const token = action.payload.accessToken;
      Cookies.set("token", token);
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
      state.admin = false;

      Cookies.remove("token");
    },

    adminLogin: (state, action) => {
      if (action.payload === "dhaka1219") {
        state.adminError = false;
        state.admin = true;
      } else {
        state.adminError = true;
      }
    },

    adminLogout: (state) => {
      state.admin = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  adminLogin,
  adminLogout,
} = userSlice.actions;
export default userSlice.reducer;
