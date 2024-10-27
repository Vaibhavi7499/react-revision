import React, { useState } from "react";
import "./Todo.scss";
import { useDispatch, useSelector } from "react-redux";
import { add_todo } from "../../Slice/TodoSlice";

const Todo = () => {
  let dispatch = useDispatch();
  let todolist = useSelector((state)=>state.todo)
let [todo,setTodo] = useState("");
  let addTodo=()=>{
dispatch(add_todo(todo))
  }

  return (
    <div className="todo-container col-md-6 m-auto mt-5">
      <div className="btn-container">
        <h2>Todo List</h2>
        <div>
          <label>Enter todo : </label>
          <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        </div>
        <div>
          <button className="btn btn-dark " onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
      </div>
      <div className="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">An item</li>
          <li class="list-group-item">An item</li>
        </ul>
      </div>
    </div>
  );
};

export default Todo;
