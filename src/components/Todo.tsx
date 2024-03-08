export default function Todo({title, body}: {title: string, body: string}){
  const div = {
    border: 'solid 1px white',
    padding: '1em'
  }

  return (
    <div style={div}>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>completed: <input type="checkbox" /></p>
      {/* <button onClick={() => deleteTodo()}>Delete todo</button> */}
    </div>
  );
};