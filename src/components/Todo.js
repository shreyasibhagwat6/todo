import { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import EditTodo from "./EditTodo";

function Todo ({ todo, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);
    
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
    
    return <div>
        {content}
        <div>
            <Button colorScheme="teal" onClick={handleEditClick}>
                Edit
            </Button>
           <Button colorScheme="teal" onClick={handleDeleteClick}>
                Remove
            </Button> 
        </div>
        </div>
}

export default Todo;