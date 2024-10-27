import { configureStore } from "@reduxjs/toolkit";
import { TodoSlice } from "../Slice/TodoSlice";

const TodoStore = configureStore({
  reducer: {
    todo: TodoSlice,
  }
});

export default TodoStore;
