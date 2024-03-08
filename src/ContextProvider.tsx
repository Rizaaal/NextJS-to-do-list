import { Dispatch, ReactElement, SetStateAction, createContext, useEffect, useState } from "react";

export const todoContext = createContext<ContextProps>({
  todos: [],
  setTodos: () => {},
  deleteTodo: () => {}
});

export interface ContextProps {
  todos: Todo[] | null
  setTodos: Dispatch<SetStateAction<Todo[] | null>>
  deleteTodo: (id: number) => void
}



export default function TodoContext({ children }: { children: ReactElement }) {
  const [todos, setTodos] = useState<Todo[] | null>(null)

  function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(todos => setTodos(todos))
  }

  function deleteTodo(id: number) {
    console.log('deleteTodo');
    
    const prevTodos: Todo[] | null = todos;
    if (prevTodos !== null) {
      const newTodos = prevTodos.filter((todo: Todo) => todo.id !== id);
      setTodos(newTodos);
    } else {
      console.log('error: todos not found');
    }
  };

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <todoContext.Provider value={{ todos, setTodos, deleteTodo }}>
      {children}
    </todoContext.Provider>
  );
};