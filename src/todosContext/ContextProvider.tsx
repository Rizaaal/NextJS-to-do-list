import { ReactElement } from "react";
import todoContext from "./Context";

export default function TodoContext({ children }: {children: ReactElement[]}){
  return (
    <todoContext.Provider value={null}>
      {children}
    </todoContext.Provider>
  );
};