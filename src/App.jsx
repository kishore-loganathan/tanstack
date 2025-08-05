import React from 'react'
import TodoList from './pages/TodoList'
import {BrowserRouter,Routes,Route} from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
