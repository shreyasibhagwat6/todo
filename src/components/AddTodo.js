import { useState } from "react";

function AddTodo ({ onCreate }) {

    const [task, setTask] = useState('');
    
    const handleChange = (event) => {
        setTask(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(task);
        setTask('');
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Add a task</label>
            <input value={task} onChange={handleChange}></input>
            <button>Add</button>
        </form>
    </div>
)}

export default AddTodo;