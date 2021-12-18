import { useState } from "react";
import './styles.scss';

export type TTodoComponent = {
  name: string;
}

type TodoComponentProps = {
  todo: TTodoComponent;
};

export function TodoComponent({ todo }: TodoComponentProps) {
  const [closed, setClosed] = useState(false);
  return (
    <li className={`todo-item ${closed && 'closed'}`}>
      <span className="name">{todo.name}</span>
      <div className="row">
        <input type="checkbox" checked={closed} id={todo.name} onChange={() => setClosed(!closed)}/>
        <label htmlFor={todo.name} className="close">{closed ? 'Abrir': 'Fechar'}</label>
      </div>
    </li>
  );
}
