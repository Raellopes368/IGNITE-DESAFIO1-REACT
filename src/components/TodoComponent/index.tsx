export type TTodoComponent = {
  name: string;
  closed: boolean;
}

type TodoComponentProps = {
  todo: TTodoComponent;
};

export function TodoComponent({ todo }: TodoComponentProps) {
  return (
    <li className={`todo-item ${todo.closed && 'closed'}`}>
      <span>{todo.name}</span>
    </li>
  );
}
