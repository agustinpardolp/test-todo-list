import React, { useState } from "react";
import Button from "../../components/Button";
import ViewWrapper from "../../components/ViewWraper";
import TodoList from "./components/TodoList";
import { todoListArray, viewLabels } from "./constants";
import styles from "./styles.module.scss";

const TaskManager = () => {
  const [todos, setTodos] = useState(todoListArray);

  const handleAddTodo = (e) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: e.target.value, todos: [] },
    ]);
  };
  return (
    <ViewWrapper>
      <div className={styles.todoListContainer}>
        {todos?.length &&
          todos.map((todoContainer) => {
            return (
              <TodoList
                key={todoContainer.id}
                title={todoContainer}
                todosArray={todoContainer.todos}
              />
            );
          })}
      </div>
      <Button label={viewLabels.buttonLabel} handleClick={handleAddTodo} />
    </ViewWrapper>
  );
};

export default TaskManager;
