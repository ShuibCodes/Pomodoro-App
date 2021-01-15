import React, {useState} from 'react';
// import "../App.css"
import TodoForm from '../TaskList/TodoForm'
import List from './List'

const MainTodo = () => {
    const [todos,setTodos] = useState([]);

    function addTodo(task){
            // make a new aray called todo , adding it to start, and then spread the old array (todos) onto it
            setTodos([task, ...todos]);
    }


    function toggleComplete(id){
        // use setTodos to change state if id is matching then change completed to true
        setTodos(
            // mapping thru each todo, then adding function to them
            todos.map(todo =>{
                if (todo.id === id){
                    return{
                        ...todo,
                        completed: !todo.completed //(will activate line thru class)
                    };
                }

                return todo;
            })
        )
    }

        function deleteTodo(id){
                setTodos(todos.filter(todo => todo.id !== id ));
        }
    return (
        <div>
         
                <h2>Task-List</h2>
          
            <TodoForm addTodo={addTodo}/>
            <List todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        </div>
    );
}

export default MainTodo;
