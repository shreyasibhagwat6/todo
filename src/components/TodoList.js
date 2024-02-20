import Todo from "./Todo";

function TodoList ({ todo }) {
    const renderedTodo = todo.map((todo) => {
        return <Todo key={todo.id} todo={todo}/>
    });

    return (
    <div>{renderedTodo}</div>
)}

export default TodoList;