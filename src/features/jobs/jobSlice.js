import { createSlice } from "@reduxjs/toolkit";
import jobs from "./data";
const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["select", "full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["select", "interview", "declined", "pending", "Employed"],
  status: "pending",
  isEditing: false,
  editJobId: "",
  allJobs: jobs,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setAllJobs: (state, { payload }) => {
      state.allJobs = [...state.allJobs, { ...payload, id: Math.random() }];
    },
    deleteJob: (state, { payload }) => {
      state.allJobs = state.allJobs.filter((job) => job.id !== payload);
    },
    editJob: (state, { payload }) => {
      state.allJobs = state.allJobs.map((job) =>
        job.id === payload.id ? payload : job,
      );
    },
    setEditJobId: (state, { payload }) => {
      state.editJobId = payload;
    },
  },
});
export const { setAllJobs, deleteJob, editJob, setEditJobId } =
  jobSlice.actions;
export default jobSlice.reducer;
