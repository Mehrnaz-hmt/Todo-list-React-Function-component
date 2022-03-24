import React from "react";

const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
  setErrorText,
}) => {
  const inputTextHandler = (e) => {
    // console.log(e.target.value)
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText) {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Date.now() },
      ]);
      //   For reset this input
      setInputText("");
      setErrorText("");
    } else {
      setErrorText("please enter a Task");
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
