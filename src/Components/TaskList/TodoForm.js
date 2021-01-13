// keep track of our state
import React,{useState} from 'react';
// import {v4 as uuid} from 'uuid';
// destructing addTodo function from props paramter. props can only be passed down from parent to child
const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState({
        // state will keep track of input from user, so object with 3 properties
        id: "",
        task: "",
        completed: false,
    });
    
        // function that will update object props onChange, so the task in this case.
        // will put in the todo properties with spread operator (only id and completed), then set the task prop to new value
        function handleChange(e){
            setTodo({...todo, task: e.target.value})
        }

        // when user submits, we need to add form todo from statte to list of todos

        function handleSubmit(e){
            // prevent default 
            e.preventDefault();
            // if there the form is NOT empty (no white space)
            if(todo.task.trim()){
                addTodo({...todo});
                // reset form by updating state with empty task prop:
                setTodo({...todo, task: ""});

            }
        }


    return (
        <form onSubmit={handleSubmit} >
            <input onChange={handleChange} 
                value={todo.task}
                type="text"
                placeholder="Add Todo"            />
            <button />
        </form>
    );
}

export default TodoForm;
