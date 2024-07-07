import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todoSlices";
import currentTaskReducer from "./slices/currentTaskSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    currentTask: currentTaskReducer,
  },
});
