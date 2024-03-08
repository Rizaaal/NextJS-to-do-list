import { createContext } from "react";

interface Todo {
  title: string;
  completed: boolean;
}

const todoContext = createContext<Todo | null>(null);

export default todoContext;