import React, { useState } from "react";
import Input from "../../../../components/Input";
import { viewLabels } from "../../constants";
import Todo from "../Todo";
import { statusTypes } from "../Todo/constants";
import { initialInputState } from "./constants";

import styles from "./styles.module.scss";

const TodoList = ({ todosArray }) => {
  const [todos, setTodos] = useState(todosArray);
  const [inputValue, setInputValue] = useState(initialInputState);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue) {
      setTodos([
        ...todos,
        {
          id: todosArray.length + 1,
          title: inputValue,
          status: statusTypes.TODO,
        },
      ]);
      setInputValue(initialInputState);
    }
  };
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleSetTodoValues = (newTodos, value, status) => {
    const index = todos.findIndex((todo) => todo.id === value.id);
    newTodos.splice(index, 1, { ...value, status: status });
    setTodos(newTodos);
  };
  const handleChangeTodo = (value, status) => {
    let newTodos = todos.slice();
    handleSetTodoValues(newTodos, value, status);
  };

  return (
    <div className={styles.todoListContainer}>
      <ul className={styles.todosContainer}>
        {todos &&
          todos.map((todoValue) => {
            return (
              <Todo
                key={todoValue.id}
                value={todoValue}
                handleChange={handleChangeTodo}
              />
            );
          })}
      </ul>
      <form onSubmit={handleAddTodo}>
        <Input
          placeholder={viewLabels.inputPlaceholder}
          handleChange={handleInputValue}
          value={inputValue}
        />
      </form>
    </div>
  );
};

export default TodoList;
