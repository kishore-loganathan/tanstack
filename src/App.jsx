import React from 'react'
import { useQuery } from '@tanstack/react-query'

const App = () => {
  const{data,isPending,refetch,error}=useQuery({
    queryKey:["todo"],
    queryFn:getTodos,
  });
  if(error)
  {
    alert("something went wrong");
  }
  return (
    <div>
      <div>
        {isPending ? <h1>loading</h1> : JSON.stringify(data.slice(0, 10))}
        <button onClick={() => refetch()}>refetch</button>
      </div>
    </div>
  );
}
const getTodos=async ()=>{
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
}
export default App
