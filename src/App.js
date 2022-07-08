import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Form from './component/Form';
import TodoList from './component/TodoList';
 

const App=()=>{
  const[input,setInput]=useState()
  const[todo,setTodo]=useState([])
  return (
    <div className="App">
   <Header/>
     <Form input={input} setInput={setInput} todo={todo} setTodo={setTodo}/>
        <TodoList todo={todo} setTodo={setTodo} input={input} setInput={setInput}  />
    </div>
  );
}

export default App;
