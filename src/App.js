import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="container">
      <header className="Header">Todos</header>
      <div>
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App;
