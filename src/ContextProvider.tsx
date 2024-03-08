import { Dispatch, ReactElement, SetStateAction, createContext, useEffect, useState } from "react";

export const todoContext = createContext<ContextProps>({
  todos: [],
  setTodos: () => {}
});

export interface ContextProps {
  todos: Todo[] | null
  setTodos: Dispatch<SetStateAction<Todo[] | null>>
}



export default function TodoContext({ children }: {children: ReactElement}){
  const [todos, setTodos] = useState<Todo[] | null>(null)

  function getTodos(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(todos => setTodos(todos))
  }
  
  useEffect(() => {
    getTodos()
  }, [])

  return (
    <todoContext.Provider value={{ todos, setTodos }}>
      {children}
    </todoContext.Provider>
  );
};