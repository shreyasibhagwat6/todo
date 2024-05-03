import { useState } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

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
            <Heading margin='2'>Shreyasi's to-do list</Heading>
            <Input h='35px' margin='2' value={task} onChange={handleChange} placeholder="Add a task"/>
            <button>
                <Button h='30px' margin='2' colorScheme="teal">
                    Add
                </Button>
            </button>
        </form>
    </div>
)}

export default AddTodo;