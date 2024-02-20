import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App () {
    const [todo, setTodo] = useState([]);

    const createTodo = (task) => {
        const id = Math.round(Math.random()*9999);
        const updatedTodo = [
            ...todo, 
            { id: id, task: task}
        ];
        
        setTodo(updatedTodo);
    }

    return (
    <div>
        <AddTodo onCreate={createTodo}/>
        <TodoList todo={todo}/>
    </div>
)}

export default App;