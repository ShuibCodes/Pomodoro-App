 import React from 'react';
 
 const Todo = ({todo, toggleComplete,deleteTodo}) => {
    function handleCheckBox(){
        toggleComplete(todo.id);
    }
       
    function handleDelete(){
        deleteTodo(todo.id)
    }


     return (
        <div style={{display: "flex"}} >
        <input onClick={handleCheckBox} type="checkbox" />
         <li
            style={{
                color: "white",
                textDecoration: todo.completed ? "line-through" : null
            }}
         >{todo.task}</li>
         <button onClick={handleDelete} >x</button>
        </div>
      
         
         
     );
 }
 
 export default Todo;
 