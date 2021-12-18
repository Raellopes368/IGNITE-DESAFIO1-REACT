import { useState } from "react";
import { TTodoComponent, TodoComponent } from "../TodoComponent";
import { InputTodo } from "../InputTodo";
import styles from "./styles.module.scss";

export function TodoList() {
  const [todos, setTodos] = useState<TTodoComponent[]>([]);
  function handleSaveTodo(todo: string) {
    setTodos([{ name: todo }, ...todos]);
  }

  return (
    <div className={styles.container}>
      <InputTodo saveTodo={handleSaveTodo} />
      <ul className={styles.todoList}>
        {todos.map(todo => (
          <TodoComponent key={todo.name} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
