
export const todoContext = createContext<ContextProps | null>(null);

export interface ContextProps {
  todos: Todo[] | null
  setTodos: Dispatch<SetStateAction<Todo[] | null>>
}



export default function TodoContext({ children }: {children: ReactElement}){
