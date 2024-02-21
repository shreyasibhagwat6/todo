import Todo from "./Todo";

function TodoList ({ todo, onDelete }) {
    const renderedTodo = todo.map((todo) => {
        return <Todo key={todo.id} todo={todo} onDelete={onDelete}/>
    });

    return (
    <div>{renderedTodo}</div>
)}

export default TodoList;