import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import LoginPage from "./pages/LoginPage";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChakraProvider, extendTheme, theme as chakraTheme, } from "@chakra-ui/react"; 

function App () {
    const [todo, setTodo] = useState([]);

    const fetchTodo = async () => {
        const response = await axios.get('http://localhost:3001/todo')
        setTodo(response.data);
    };

    useEffect (()=>{
        fetchTodo();
    }, []);

    const editTodoById = async (id, newTodo) => {
        const response = await axios.put(`http://localhost:3001/todo/${id}`,
        {
            task: newTodo,
        });

        const updatedTodo = todo.map((todo) => {
            if (todo.id === id) {
                return {...todo, ...response.data}
            }

            return todo;
        });
        setTodo(updatedTodo);
    };
    
    const deleteTodoById = async (id) => {
        await axios.delete(`http://localhost:3001/todo/${id}`);

        const updatedTodo = todo.filter((todo) => {
            return todo.id !== id;
        });

        setTodo(updatedTodo);
    }

    const createTodo = async (task) => {
        const response = await axios.post('http://localhost:3001/todo', {
            task: task,
        });

        const updatedTodo = [
            ...todo, 
            response.data
        ];
        
        setTodo(updatedTodo);
    }
    
    return (
        <Router>
            <ChakraProvider>
                <div>
                    <LoginPage />
                    <Switch>
                        <Route path="/home">
                            <AddTodo onCreate={createTodo}/>
                            <TodoList todo={todo} onDelete={deleteTodoById} onEdit={editTodoById}/>
                        </Route>
                    </Switch>
                </div>
            </ChakraProvider>
        </Router>
)}

export default App;