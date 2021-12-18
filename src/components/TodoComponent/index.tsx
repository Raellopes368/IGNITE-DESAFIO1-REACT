import { useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import "./styles.scss";

export type TTodoComponent = {
  name: string;
  index: number;
};

type TodoComponentProps = {
  todo: TTodoComponent;
  deleteTodo: (index: number) => void;
};

export function TodoComponent({ todo, deleteTodo }: TodoComponentProps) {
  const [closed, setClosed] = useState(false);
  return (
    <li className={`todo-item ${closed && "closed"}`}>
      <div className="todoRow">
        <span className="name">{todo.name}</span>
        <BsTrashFill
          color="#e42b2b"
          size={23}
          onClick={() => {
            deleteTodo(todo.index)
          }}
        />
      </div>
      <div className="row">
        <input
          type="checkbox"
          checked={closed}
          id={todo.name}
          onChange={() => setClosed(!closed)}
        />
        <label htmlFor={todo.name} className="close">
          {closed ? "Abrir" : "Fechar"}
        </label>
      </div>
    </li>
  );
}
