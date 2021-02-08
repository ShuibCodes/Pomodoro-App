// keep track of our state
import React,{useState} from 'react';
import {TextField} from '@material-ui/core'



// import {v4 as uuid} from 'uuid';
// destructing addTodo function from props paramter. props can only be passed down from parent to child
const TodoForm = ({addTodo,toggle}) => {
    const [todo, setTodo] = useState({
        // state will keep track of input from user, so object with 3 properties
        id: "",
        task: "",
        completed: false,
    });
    
    
        // function that will update object props onChange, so the task in this case.
        // will put in the todo properties with spread operator (only id and completed), then set the task prop to new value which user inputs
        function handleChange(e){
            setTodo({...todo, task: e.target.value});

        }

        // when user submits, we need to add form todo from state to list of todos

        function handleSubmit(e){
            // prevent default 
            e.preventDefault();
            // if the form is NOT empty (no white space)
            if(todo.task.trim()){
                // addTodo func adds an array, this function asigns it ar
                addTodo({...todo, id: Math.random()});
                
          
                // reset form by updating state with empty task prop:
                setTodo({...todo, task: ""});
               

            }
        }
       

    return (
        <>
            
         <form className="todo-form" onSubmit={handleSubmit}>
            <TextField onChange={handleChange} 
                variant="standard"
                className="AddTodo"
                label="Task"
                value={todo.task}
                type="text"
                placeholder="Add Task"
                style={{fontSize:'50px'}}   
                 />
        </form>
        </>
       
    );
}

export default TodoForm;
