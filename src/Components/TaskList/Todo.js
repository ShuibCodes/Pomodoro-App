 import React from 'react';
 import {Checkbox,IconButton, Typography} from '@material-ui/core';
 import {BsTrash} from 'react-icons/bs'
 import { IconContext } from 'react-icons/lib';
 import DeleteIcon from '@material-ui/icons/Delete'
// import {CloseIcon} from "@material-ui/icons/Close"
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'

 const Todo = ({todo, toggleComplete,deleteTodo}) => {
    function handleCheckBox(){
        toggleComplete(todo.id);
    }
       
    function handleDelete(){
        deleteTodo(todo.id)
    }


     return (
        <div className="AddTodo">
        <Checkbox style={{position:'relative', bottom:'3.2rem',width:'20px'}} id="check" checked={todo.completed}  onClick={handleCheckBox} type="checkbox" />
         <p
            
            style={{
                // width: '100%',
                // color: "black",
                textDecoration: todo.completed ? "line-through" : null
            }}
         >{todo.task}</p>
    
        </div>
      
         
         
     );
 }
 
 export default Todo;

