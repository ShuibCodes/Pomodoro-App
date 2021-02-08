 import React from 'react';


 const Todo = ({todo}) => {



     return (
        <div className="AddTodo">
            <div className="contain">
            <p
            style={{
               
                textDecoration: todo.completed ? "line-through" : null
            }}
         >{todo.task}</p>
         
    
            </div>

        </div>
      
         
         
     );
 }
 
 export default Todo;

