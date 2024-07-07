import { createSlice } from "@reduxjs/toolkit";
import { getTodosFromStorage } from "../../utils";

const initialState = getTodosFromStorage() || [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      return newState;
    },
    setTodos: (state, action) => {
      return action.payload;
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, setTodos } = todosSlice.actions;
export default todosSlice.reducer;
