import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
const fetchTodos = async () => {
  const response = await fetch("https://api.freeapi.app/api/v1/todos");
  const data = await response.json();
  return data.data;
};
const createTodo = async ({ title }) => {
  const response = await axios.post("https://api.freeapi.app/api/v1/todos", {
    title,
  });
  return response.data;
};
const TodoList = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 10000,
  });
  const mutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      setTitle("");
    },
  });
  const handleAdd = () => {
    mutation.mutate({ title });
  };
  return (
    <div>
      <h2>Todo List</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add Todo</button>
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