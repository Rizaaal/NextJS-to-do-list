import { todoContext } from "@/ContextProvider";
import { useContext } from "react";

export default function Todo({title, body, id}: {title: string, body: string, id: number}){
  const { deleteTodo, completed, setCompleteValue } = useContext(todoContext);

  const div = {
    border: 'solid 1px white',
    padding: '1em'
  }  

  return (
    <div style={div}>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>completed: <input type="checkbox" checked={completed[id] ? true : false} onChange={() => setCompleteValue(id)}/>
      </p>
      <button onClick={() => deleteTodo(id)}>Delete todo</button>
    </div>
  );
};