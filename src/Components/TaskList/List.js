import React from 'react'
import Todo from '../TaskList/Todo'
import {List} from '@material-ui/core'


export default function TaskList({todos, toggleComplete, deleteTodo}) {

    
    
    return (
       
         <List id="todos"
    
          >
             {todos.map(todo =>(
                         // when using map, always have a key
            <Todo  key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
             ))}
         </List>
       
       
    )
}
