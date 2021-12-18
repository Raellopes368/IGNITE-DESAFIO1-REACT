import { useState } from "react";
import { TTodoComponent, TodoComponent } from "../TodoComponent";
import { InputTodo } from "../InputTodo";
import styles from "./styles.module.scss";
type TTodo = {
  name: string;
};

export function TodoList() {
  const [todos, setTodos] = useState<TTodo[]>([]);
  function handleSaveTodo(todo: string) {
    setTodos([{ name: todo }, ...todos]);
  }

  function handleDeleteTodo(index: number) {
    const removedTodos = todos.filter((todo, indx) => indx !== index);
    setTodos(removedTodos);
  }

  return (
    <div className={styles.container}>
      <InputTodo saveTodo={handleSaveTodo} />
      <ul className={styles.todoList}>
        {todos.map((todo, index) => (
          <TodoComponent
            key={todo.name}
            todo={{
              ...todo,
              index,
            }}
            deleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
