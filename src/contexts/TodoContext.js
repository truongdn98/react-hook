import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';
export const TodoContext = createContext()
const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState([
        // {id: 1, title: "Viec 1"},
        // {id: 2, title: "Viec 2"},
        // {id: 3, title: "Viec 3"},

    ])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        const persons = res.data;
        console.log(persons)
       setTodos(res.data);
      })
      .catch(error => console.log(error));
      }, [])
      
    useEffect(() => {
        console.log('getting todo')
        const todos = localStorage.getItem('todos')
        if (todos) setTodos(JSON.parse(todos))
    },[])
    useEffect(() => {
        console.log('running')
        localStorage.getItem('todo', JSON.stringify(todos))
    },[todos])
    const addTodo = todo => {
        //const newTodo = todos.map(todo => todo.id == id)
        setTodos([...todos,todo]);
    }
    const deleteTodo = (id) => {
        const newTodo = todos.filter(todo => todo.id !== id)
        setTodos(newTodo);
    }
    const todoContextData = {
        todos,
        addTodo,
        deleteTodo
    }
    return (
        <TodoContext.Provider value={todoContextData}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider
