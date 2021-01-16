 import React from 'react';
 import {Checkbox,IconButton, Typography} from '@material-ui/core';
 import {BsTrash} from 'react-icons/bs'
 import { IconContext } from 'react-icons/lib';
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
        <Checkbox id="check" checked={todo.completed}  onClick={handleCheckBox} type="checkbox" />
         <Typography variant="body1"
            
            style={{
                color: "black",
                textDecoration: todo.completed ? "line-through" : null
            }}
         >{todo.task}</Typography>
         <IconButton className="btn" onClick={handleDelete}> <IconContext.Provider value={{size:"20px"}} > <BsTrash />   </IconContext.Provider> </IconButton>
        </div>
      
         
         
     );
 }
 
 export default Todo;
 