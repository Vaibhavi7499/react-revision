import React from "react";
import "./Todo.scss";

const Todo = () => {
  return (
    <div className="todo-container col-md-6 m-auto mt-5">
      <div className="btn-container">
        <h2>Todo List</h2>
        <div>
          <label>Enter todo : </label>
          <input type="text" />
        </div>
        <div>
          <button className="btn btn-dark ">Add Todo</button>
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
