 import React from 'react';
 import {Checkbox,IconButton, Typography} from '@material-ui/core';
// import {CloseIcon} from "@material-ui/icons/Close"
 const Todo = ({todo, toggleComplete,deleteTodo}) => {
    function handleCheckBox(){
        toggleComplete(todo.id);
    }
       
    function handleDelete(){
        deleteTodo(todo.id)
    }


     return (
        <div style={{display: "flex"}} >
        <Checkbox checked={todo.completed}  onClick={handleCheckBox} type="checkbox" />
         <Typography variant="body1"
            
            style={{
                color: "black",
                textDecoration: todo.completed ? "line-through" : null
            }}
         >{todo.task}</Typography>
         <IconButton onClick={handleDelete}> x  </IconButton>
        </div>
      
         
         
     );
 }
 
 export default Todo;
 