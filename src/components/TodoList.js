import React from 'react'
 
const TodoList = ({todo,setTodo,input,setInput}) => {
const deleteHandler=(todo_list)=>{
todo_list.completed=false
  setTodo(todo
    .filter(todo=>todo
    .completed===true))
  console.log('deleting...',todo_list.title)
}


const editHandler=(t,td) => {
    console.log("editting")
    setInput(t)
    deleteHandler(td)
}
   return (
     <div>
      <ol>
        {
          todo.map((todo,index)=><li key={index}>
         {todo.title}
            
           
            <div>
              <button onClick={()=>editHandler(todo.title,todo)}><i>edit</i></button>
              <button
              onClick={()=>deleteHandler(todo)
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
