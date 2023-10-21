import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";

export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

function App() {
  const todoSample: Todo[] = [
    {
      id: 1,
      title: "test",
      done: false,
    },
    {
      id: 2,
      title: "test2",
      done: false,
    },
  ];

  const [todos, setTodos] = useState<Todo[]>(todoSample);

  const deleteTodo = (todo: Todo) => {
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  };

  const completeTodo = (todo: Todo) => {
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, done: !t.done };
      }

      return t;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <h1 className="text-3xl">Todoリスト</h1>

      <Form setTodos={setTodos} />

      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        );
      })}
    </>
  );
}

export default App;
