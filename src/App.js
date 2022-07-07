import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList  from './components/TodoList';
 

const App=()=>{
  const[input,setInput]=useState('')
  const[todo,setTodo]=useState([])
  return (
    <div className="App">
   <Header/>
     <Form input={input} setInput={setInput} todo={todo} setTodo={setTodo}/>
        <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
