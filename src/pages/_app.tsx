import "@/styles/globals.css";
import TodoContext from "@/ContextProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <TodoContext>
    <Component {...pageProps} />
  </TodoContext>
  );
}
