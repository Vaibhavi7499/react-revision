import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "todo",
  initialState: [],

  reducers: {
    add_todo: (state, action) => {
      console.log(state,action)
      //state.push(action.payload);
    },
  },
});

export const { add_todo } = TodoSlice.actions;
export default TodoSlice.reducer;
