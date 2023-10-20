import type { Todo } from "../App";
import styles from "./TodoItem.module.css";

type TodoItemProps = {
  todo: Todo;
  deleteTodo: (todo: Todo) => void;
  completeTodo: (todo: Todo) => void;
};

function TodoItem({ todo, deleteTodo, completeTodo }: TodoItemProps) {
  return (
    <div key={todo.id} className={styles["todo-item"]}>
      <div className={`${styles.title}`}>
        <p className={`${todo.done ? styles.todoDone : ""}`}>{todo.title}</p>
      </div>
      <div className={styles["btn-wrap"]}>
        <button
          type="button"
          className={`${styles.btn}`}
          onClick={() => deleteTodo(todo)}
        >
          削除
        </button>
        <button
          type="button"
          className={`${styles.btn} ${styles.btnComplete}`}
          onClick={() => completeTodo(todo)}
        >
          完了
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
