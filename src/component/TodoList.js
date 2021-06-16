import React, { useContext } from 'react'
import TodoListItem from './TodoListItem'
import Form from './Form'
import { TodoContext } from '../contexts/TodoContext'
import { AuthContext } from '../contexts/AuthContext'

const TodoList = () => {
    const { todos } = useContext(TodoContext)
    const { auth } = useContext(AuthContext)

    return (
        <div className="todo-list">
            { auth.authenticated ?
                <div>
                    <Form />
                    <ul>
                        { todos.map(todo =>
                            <TodoListItem todo={todo} key={todo.id} ></TodoListItem>)}

                    </ul>
                </div> : <p>Bạn cần phải đăng nhập</p>}

        </div>
    )
}

export default TodoList
