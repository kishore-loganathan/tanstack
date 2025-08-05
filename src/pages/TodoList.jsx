import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
const fetchTodos = async () => {
  const response = await fetch(
    "https://api.freeapi.app/api/v1/todos"
  );
  const data = await response.json();
  return data.data;
};
const TodoList = () => {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,  
    staleTime: 10000,
  });
  const [Title, setTitle] = useState("");
  return (
    <div>
      <h2>Todo List</h2>
      <input
        value={Title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <button
        onClick={async () => {
          await axios.post("https://api.freeapi.app/api/v1/todos", {
            title: Title,
          });
          setTitle("");
        }}
      >
        Add Todo
      </button>
      <p>{isFetching ? "Revalidating..." : "Fresh data"}</p>
      <ul>
        {data?.map((todo) => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};
export default TodoList;
