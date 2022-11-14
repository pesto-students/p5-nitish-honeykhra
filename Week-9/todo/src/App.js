import "./App.css";
import Form from "./components/Form";
import Heading from "./components/Heading";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="card">
      <Heading />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
