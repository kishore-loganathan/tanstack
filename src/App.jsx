import React from 'react'
import { useQuery } from '@tanstack/react-query'
const App = () => {
  const{data}=useQuery({
    queryKey:["todo"],
    queryFn:getTodos,
  });
  return (
    <div>
      <div>{JSON.stringify(data.slice(0,10))
        }</div>
    </div>
  )
}
const getTodos=async ()=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
}
export default App
