import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>T O D O </h1>
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}
        setErrorText={setErrorText}
      />
      <p className="error">{errorText}</p>
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
