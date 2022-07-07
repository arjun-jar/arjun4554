 import React from 'react'
 
const TodoList = ({todo,setTodo}) => {
const deleteHandler=(todo_list,index)=>{
console.log(todo_list.completed)
todo_list.completed=false
console.log(todo_list.completed)
  setTodo(todo
    .filter(todo=>todo
    .completed===true))
  console.log('deleting...',todo_list.title)
}

   return (
     <div>
      <ol>
        {
          todo.map((todo,index)=><li key={index}>
            <input
            value= {todo.title}
            onChange={(event)=>event.preventDefault()}>
            </input>
           
            <div>
              <button><i>edit</i></button>
              <button
              onClick={()=>deleteHandler(todo,index)
              }
              ><i>delete</i></button>
            </div>
          </li>
         
          )
        }
      </ol>
       
     </div>
   )
 }
 export default TodoList