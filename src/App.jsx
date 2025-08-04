import React from 'react'
import { useQuery } from '@tanstack/react-query'

const App = () => {
  const{data,isFetching}=useQuery({
    queryKey:["todo"],
    queryFn:getTodos,
  });
  return (
    <div>
      <div>{isFetching?<h1>loading</h1>:JSON.stringify(data.slice(0,10))
        }</div>
    </div>
  )
}
const getTodos=async ()=>{
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
}
export default App
