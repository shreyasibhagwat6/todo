import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { ChakraProvider, extendTheme, theme as chakraTheme, } from "@chakra-ui/react"; 

function App () {
    const [todo, setTodo] = useState([]);

    const editTodoById = (id, newTodo) => {
        const updatedTodo = todo.map((todo) => {
            if (todo.id === id) {
                return {...todo, task: newTodo}
            }

            return todo;
        });
        setTodo(updatedTodo);
    };
    
    const deleteTodoById = (id) => {
        const updatedTodo = todo.filter((todo) => {
            return todo.id !== id;
        });

        setTodo(updatedTodo);
    }
    
    const createTodo = (task) => {
        const id = Math.round(Math.random()*9999);
        const updatedTodo = [
            ...todo, 
            { id: id, task: task}
        ];
        
        setTodo(updatedTodo);
    }

    return (
        <ChakraProvider>
            <div>
                <AddTodo onCreate={createTodo}/>
                <TodoList todo={todo} onDelete={deleteTodoById} onEdit={editTodoById}/>
            </div>
        </ChakraProvider>
)}

export default App;