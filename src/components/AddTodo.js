import { useState } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'

function AddTodo ({ onCreate }) {

    const [task, setTask] = useState('');
    
    const handleChange = (event) => {
        setTask(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(task);
        console.log(task);
        setTask('');
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Add a task</label>
            <input value={task} onChange={handleChange}></input>
            <Button colorScheme='teal' size="sm">
                <button>Add</button>
            </Button>
        </form>
    </div>
)}

export default AddTodo;