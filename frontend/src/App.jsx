import { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos when the component mounts
  useEffect(() => {
    fetch("http://localhost:3000/todo")
      .then((res) => res.json())  // Parse the response as JSON
      .then((data) => setTodos(data.todos))  // Update state with the fetched todos
      .catch((error) => console.error("Error fetching todos:", error));
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
