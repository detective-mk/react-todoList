import styles from "./Form.module.css";
import type { Todo } from "../App";
import { useState } from "react";

type FormProps = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function Form({ setTodos }: FormProps) {
  const [enteredTodo, setEnteredTodo] = useState("");

  const addTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const value = enteredTodo;
    const newTodo = {
      id: Math.trunc(Math.random() * 1e5),
      title: value,
      done: false,
    };

    setTodos((prev: Todo[]) => [...prev, newTodo]);
    setEnteredTodo("");
  };

  return (
    <>
      <form className={styles.form}>
        <input
          type="text"
          className={styles.input}
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button
          type="submit"
          className={styles.btn}
          onClick={(e) => addTodo(e)}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
