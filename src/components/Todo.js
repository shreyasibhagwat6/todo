import { Button, ButtonGroup } from '@chakra-ui/react'

function Todo ({ todo, onDelete }) {
    const handleClick = () => {
        onDelete(todo.id)
    }
    
    return <div>
        {todo.task}
        <div>
            <Button>
                Edit
            </Button>
           <Button onClick={handleClick}>
                Remove
            </Button> 
        </div>
        </div>
}

export default Todo;