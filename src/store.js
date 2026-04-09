import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentSlice";
import todoReducer from "./TodoListSlice";

export const store = configureStore({
  reducer: {
    students: studentReducer,
    todoList: todoReducer,
  },
});