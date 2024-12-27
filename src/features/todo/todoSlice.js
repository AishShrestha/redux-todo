import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Eat breakfast" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      console.log(action.payload);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload )
      console.log(state.todos);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions; 


export default todoSlice.reducer;
