import React, {useState} from 'react';
// import "../App.css"
import TodoForm from '../TaskList/TodoForm'
import List from './List'

const MainTodo = () => {
    const [todos,setTodos] = useState([]);

    function addTodo(todo){
            // make a new aray called todo , adding it to start, and then spread the old array (todos) onto it
            setTodos([todo, ...todos]);
    }

    return (
        <div>
            <header className="App-header">
                <h2>Task-List</h2>
            </header>
            <TodoForm addTodo={addTodo}/>
            <List todos={todos} />
        </div>
    );
}

export default MainTodo;
