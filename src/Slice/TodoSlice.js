import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: [],

  reducers: {
    add_todo: (state, action) => {
      state.push(action.payload);
    },

    delete_todo: (state, action) => {
      console.log(action);
      return state.filter((e) => {
        return e.id !== action?.payload;
      });
    },

    update_todo: (state, action) => {
      return state.map((e) => {
        if (e?.id === action?.payload?.id) {
          return {
            ...e,
            name: action.payload.name,
          };
        } else {
          return e;
        }
      });
    },
  },
});

export const { add_todo, delete_todo, update_todo } = TodoSlice.actions;
export default TodoSlice.reducer;
