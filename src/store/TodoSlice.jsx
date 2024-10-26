import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: [],

  reducers: {

    addTodo: (state, action) => {
      state.push(action.payload);
    },

  },
});

export const { addTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
