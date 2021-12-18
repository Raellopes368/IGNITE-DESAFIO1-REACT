import { useState } from "react";
import { BiSmile } from "react-icons/bi";
import Picker, { IEmojiData } from "emoji-picker-react";
import styles from "./styles.module.scss";

type InputTodoProps = {
  saveTodo: (text: string) => void;
};

export function InputTodo({ saveTodo }: InputTodoProps) {
  const [todo, setTodo] = useState("");
  const [emojiShow, setEmojiShow] = useState(false);
  function emojiSelect(event: React.MouseEvent, emojiObject: IEmojiData) {
    setTodo(`${todo}${emojiObject.emoji}`);
  }

  function handleSaveTodo() {
    setEmojiShow(false);
    if(!todo.trim().length) return;
    saveTodo(todo);
    setTodo('');
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.inputTodoBorder}>
          <input
            type="text"
            placeholder="Todo"
            value={todo}
            onChange={e => setTodo(e.target.value)}
            className={styles.inputTodo}
          />
          <button
            type="button"
            className={styles.emojiContainer}
            onClick={() => setEmojiShow(!emojiShow)}
          >
            <BiSmile color="#ffcd1e60" size={25} />
          </button>
        </div>
        <button type="button" className={styles.button} onClick={handleSaveTodo}>
          Salvar
        </button>
      </div>
      {emojiShow && (
        <div className={styles.emojiCardContainer}>
          <Picker
            onEmojiClick={emojiSelect}
            disableSearchBar
            groupVisibility={{
              flags: true,
            }}
            groupNames={{
              smileys_people: "",
              animals_nature: "",
              food_drink: "",
              travel_places: "",
              activities: "",
              objects: "",
              symbols: "",
              flags: "",
              recently_used: "",
            }}
            pickerStyle={{ background: "#1B262C" }}
          />
        </div>
      )}
    </div>
  );
}
