import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: "",
  description: "",
  dueDate: "",
  completed: false,
};

const currentTaskSlice = createSlice({
  name: "currentTask",
  initialState,
  reducers: {
    setCurrentTask: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateCurrentTask: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearCurrentTask: () => {
      return initialState;
    },
  },
});

export const { setCurrentTask, updateCurrentTask, clearCurrentTask } = currentTaskSlice.actions;
export default currentTaskSlice.reducer;
