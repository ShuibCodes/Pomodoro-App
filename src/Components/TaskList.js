import React, {useState} from 'react';


const TaskList = () => {
    const [input, setInput] = useState("")
    const array = [
        {id: 1, content: 'buy some milk'},
        {id: 2, content: 'play mario kart'}
      ];
    // const todos = [];
    // addTodo = () =>{
    //         console.log(e.target.value)
    // }

    // function handleChange(e){
    //     setInput(e.target.value);
    
    //      console.log(input)
    // }
    //     const todos = []
    // function handleClick(){
        
    // }

    const handleSubmit = e => {
            e.preventDefault();
        setInput(e.target.value)
        console.log(input)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input onChange={(e) => {setInput(array)}} value={input} type="text" placeholder="Add Task"></input>
            </form>
            
            {/* <button onClick={handleClick} >Add</button> */}
        </div>
    );
}

export default TaskList;
