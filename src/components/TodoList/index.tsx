import { useState } from "react";
import { TTodoComponent, TodoComponent } from "../TodoComponent";
import styles from "./styles.module.scss";

export function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<TTodoComponent[]>([]);

  return (
    <div className={styles.container}>
      <h2>Todo List</h2>
      <div className={styles.row}>
        <div className={styles.inputTodoBorder}>
          <input type="text" placeholder="Todo" className={styles.inputTodo} />
        </div>
        <button type="button" className={styles.button}>
          Salvar
          </button>
      </div>
      <ul className={styles.todoList}></ul>
    </div>
  );
}
