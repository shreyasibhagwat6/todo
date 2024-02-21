import Todo from "./Todo";

function TodoList ({ todo, onDelete, onEdit }) {
    const renderedTodo = todo.map((todo) => {
        return <Todo key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit}/>
    });

    return (
    <div>{renderedTodo}</div>
)}

export default TodoList;