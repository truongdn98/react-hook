import React, {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'
import {TodoContext} from '../contexts/TodoContext'
const TodoListItem = ({todo}) => {
     const {theme} = useContext(ThemeContext)
     const {deleteTodo} = useContext(TodoContext)
     const {isLightTheme,light,dark} = theme
     const style = isLightTheme ? light : dark
     const style2 = isLightTheme ? dark : light
  
    //   };
     
    return (
        <div>
             <li style={style} >{todo.title}
             <button style={style2} className="btn btn-delete" onClick={ deleteTodo.bind(this,todo.id)}>Xoa</button></li>
             
        </div>
    )
}

export default TodoListItem
