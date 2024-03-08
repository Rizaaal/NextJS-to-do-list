import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useContext } from "react";
import { todoContext } from "@/ContextProvider";
import Todo from "@/components/Todo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { todos } = useContext(todoContext);

  return (
    <>
      <Head>
        <title>todo list</title>
        <meta name="description" content="to do list app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>to do list</h1>
        {todos?.map(todo => 
          <li key={todo.id}>
            <Todo title={todo.title} body={todo.body} id={todo.id}/>
          </li>)}
      </main>
    </>
  );
}
