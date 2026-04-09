import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: { reducer: (state, action) => state.push(action.payload), prepare: (name) => ({ payload: { id: nanoid(), name } }) },
    removeTodo: (state, action) => state.filter(todo => todo.id !== action.payload.id),
    updateTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload.id);
      if (todo) todo.name = action.payload.name;
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;