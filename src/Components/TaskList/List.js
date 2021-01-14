import React from 'react'
import Todo from '../TaskList/Todo'

export default function List({todos, toggleComplete, deleteTodo}) {
    return (
         <li>
             {todos.map(todo =>(
                 // when using map, always have a key
            <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
             ))}
         </li>
    )
}
