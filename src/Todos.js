import React, { useState, useEffect } from 'react';

function Todos() {
  let jsonUser = localStorage.getItem("user");
  let user = JSON.parse(jsonUser);
  let userid = user.id;

  const [todos, setTodos] = useState([]);
  const [findTodos, setFindTodos] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userid}`)
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch(() => setFindTodos(false));
  }, [userid]);

  if (findTodos) {
    let todosHtml = todos.map((todo) => (
        <div key={todo.id}>
            <input checked={todo.completed} type="checkbox"/>
            <label>{todo.title}</label>
        </div>
    ));
    return (
      <div>
        {todosHtml}
      </div>
    );
  }

  return (
    <h2>There are no posts</h2>
  );
}

export default Todos;
