import { Dispatch, ReactElement, SetStateAction, createContext, useEffect, useState } from "react";

export const todoContext = createContext<ContextProps>({
  todos: [],
  completed: {},
  setTodos: () => {},
  setCompletedState: () => {}, 
  deleteTodo: () => {},
  setCompleteValue: () => {}
});

export interface ContextProps {
  //states
  todos: Todo[] | null
  completed: {[id: number]: boolean}; //todo.id
  //dispatchers
  setTodos: Dispatch<SetStateAction<Todo[] | null>>
  setCompletedState: Dispatch<SetStateAction<{[id: number]: boolean}>>
  //functions
  deleteTodo: (id: number) => void
  setCompleteValue: (id: number) => void
}



export default function TodoContext({ children }: { children: ReactElement }) {
  const [todos, setTodos] = useState<Todo[] | null>(null)
  const [completed, setCompletedState] = useState<{[id: string]: boolean}>({});

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

  function setCompleteValue(id: number){
    setCompletedState({... completed, [id]: completed[id] ? false : true})
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <todoContext.Provider value={{ todos, setTodos, deleteTodo, completed, setCompletedState, setCompleteValue }}>
      {children}
    </todoContext.Provider>
  );
};