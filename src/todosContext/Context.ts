import { createContext } from "react";

const todoContext = createContext<Todo | null>(null);

export default todoContext;