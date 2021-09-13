import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import ViewWrapper from "../../components/ViewWraper";
import { fetchTodoList } from "../../services";
import TodoList from "./components/TodoList";
import { viewLabels } from "./constants";
import styles from "./styles.module.scss";

const TaskManager = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodoList().then((response) => {
      setTodos(response.data)
    })
  }, [])
  const handleAddTodo = (e) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: `Todo ${todos.length + 1}`, todos: [] },
    ]);
  };

  return (
    <ViewWrapper title={viewLabels.title}>
      <div className={styles.todoListContainer}>
        {todos?.length &&
          todos.map((todoContainer) => {
            return (
              <TodoList
                key={todoContainer.id}
                title={todoContainer.title}
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
