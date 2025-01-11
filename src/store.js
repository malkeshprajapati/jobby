import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./features/jobs/jobSlice";
import userSlice from "./features/user/userSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice
  }
});
