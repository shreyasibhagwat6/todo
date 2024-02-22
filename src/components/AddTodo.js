import { useState } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

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
            <label>Shreyasi's to-do list</label>
            {/* <input value={task} onChange={handleChange}> */}
            <Input value={task} onChange={handleChange} placeholder="Add a task"/>
            <button>
                <Button colorScheme="teal">
                    Add
                </Button>
            </button>
        </form>
    </div>
)}

export default AddTodo;