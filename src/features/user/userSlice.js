import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: null
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    }
  }
});
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    console.log(`Register User':${JSON.stringify(user)}`);
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    console.log(`Login User':${JSON.stringify(user)}`);
  }
);
export const { toggleSidebar } = userSlice.actions;
export default userSlice.reducer;
