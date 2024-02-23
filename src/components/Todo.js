import { useState } from 'react';
import { Button, ButtonGroup, Divider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import EditTodo from "./EditTodo";

function Todo ({ todo, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);
    
    const handleCompleteClick = () => {
        onDelete(todo.id)
    }
    
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleDeleteClick = () => {
        onDelete(todo.id)
    }

    const handleSubmit = (id, newTask) => {
        setShowEdit(false)
        onEdit(id, newTask);
    }

    let content = <h3>{todo.task}</h3>;
    if (showEdit) {
        content = <EditTodo onSubmit={handleSubmit} todo={todo} />
    }
    
    return (
        <Box margin='2' padding='2' h='80px' bg='yellow.200'>
            <div>
                {content}
                <div>
                    <Button h='30px' margin='2' colorScheme="teal" onClick={handleEditClick}>
                        Edit
                    </Button>
                    <Button h='30px' margin='2' colorScheme="teal" onClick={handleCompleteClick}>
                        Complete
                    </Button>
                    <Button h='30px' margin='2' colorScheme="teal" onClick={handleDeleteClick}>
                        Remove
                    </Button> 
                </div>
            </div>
        </Box>
)}

export default Todo;