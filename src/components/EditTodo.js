import { Button, ButtonGroup } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { useState } from 'react';

function EditTodo ({ todo, onSubmit }) {
    const [task, setTask] = useState(todo.task);

    const handleChange = (event) => {
        setTask(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(todo.id, task)
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <label>Edit task</label>
            <Input onChange={handleChange} value={task}/>
            <button>
                <Button colorScheme="teal">Save</Button>
            </button>
        </form>
        </div>
}

export default EditTodo;